import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import LoadingSpinner from "../Shared/LoadingSpinner";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

export default function Register() {
  const history = useHistory();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const SignupSchema = Yup.object().shape({
    fullname: Yup.string().required("Name Required"),
    email: Yup.string().email("Invalid Email").required("Email Required"),
    phone: Yup.string().required("Phone Required"),
    password: Yup.string()
      .min(6, "Password Too Short!")
      .max(70, "Password Too Long!")
      .required("Password Required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Password did not match"
    ),
  });
  return (
    <div>
      {isLoading && <LoadingSpinner asOverlay />}
      <Formik
        initialValues={{
          fullname: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting }) => {
          //console.log(values.fullname);
          try {
            setIsLoading(true);
            const response = await fetch(
              "http://localhost:5000/user/register",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: values.fullname,
                  email: values.email,
                  phone: values.phone,
                  password: values.password,
                }),
              }
            );

            const responseData = await response.json();
            if (!response.ok) {
              throw new Error(responseData.message);
            }
            setError("");
            history.push(`/`);
            setIsLoading(false);
          } catch (err) {
            setIsLoading(false);
            setError(err.message || "Something went wrong");
          }
        }}
        // validate={(values) => {
        //   let error = {};

        //   if (values.program === "0") {
        //     error.program = "Program Required";
        //   }

        //   return error;
        // }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
          handleBlur,
          isSubmitting,
        }) => (
          <Form
            onSubmit={handleSubmit}
            className="col-11 col-sm-6 p-4 border bg-light rounded"
            style={{ margin: "50px auto" }}
          >
            <h4 style={{ textAlign: "center" }}>
              <FontAwesomeIcon icon={faUserPlus} /> Create your account, It's
              100% free
            </h4>
            {errors.email ||
            errors.fullname ||
            errors.password ||
            errors.confirmPassword ||
            errors.phone ||
            error ? (
              <ul
                className="alert alert-danger"
                style={{ listStyle: "none" }}
                role="alert"
              >
                <li>{errors.fullname}</li>
                <li>{errors.email}</li>
                <li>{errors.phone}</li>
                <li>{errors.password}</li>
                <li>{errors.confirmPassword}</li>
                <li>{error}</li>
              </ul>
            ) : null}
            <div class="form-group mb-3">
              <label for="name">Name</label>
              <Field
                type="text"
                class="form-control"
                id="name"
                name="fullname"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
                value={values.fullname}
              />
            </div>
            <div class="form-group mb-3">
              <label for="email">Email address</label>
              <Field
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={values.email}
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group mb-3">
              <label for="phoneNumber">Phone Number</label>
              <Field
                type="text"
                class="form-control"
                id="phoneNumber"
                aria-describedby="emailHelp"
                placeholder="Phone Number"
                name="phone"
                value={values.phone}
              />
            </div>
            <div class="form-group mb-3">
              <label for="exampleInputPassword1">Password</label>
              <Field
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                value={values.password}
              />
            </div>
            <div class="form-group mb-3">
              <label for="confirmPassword">Confirm Password</label>
              <Field
                type="password"
                class="form-control"
                id="confirmPassword"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={values.confirmPassword}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
