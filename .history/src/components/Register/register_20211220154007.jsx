import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function Register() {
  const SignupSchema = Yup.object().shape({
    fullname: Yup.string().required("Name Required"),
    email: Yup.string().email("Invalid Email").required("Email Required"),
    phone: Yup.string().required("Phone Required"),
    password: Yup.string()
      .min(6, "Password Too Short!")
      .max(70, "Password Too Long!")
      .required("Password Required"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          fullname: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("No error");
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
            errors.phone ? (
              <ul
                className="alert alert-danger"
                style={{ listStyle: "none" }}
                role="alert"
              >
                <li>{errors.fullname}</li>
                <li>{errors.email}</li>
                <li>{errors.phone}</li>
                <li>{errors.password}</li>
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
              <input
                type="text"
                class="form-control"
                id="phoneNumber"
                aria-describedby="emailHelp"
                placeholder="Phone Number"
              />
            </div>
            <div class="form-group mb-3">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="form-group mb-3">
              <label for="confirmPassword">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="confirmPassword"
                placeholder="Confirm Password"
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
