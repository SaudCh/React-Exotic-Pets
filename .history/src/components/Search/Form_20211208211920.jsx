import React from "react";

export default function Form(props) {
  //const [category, setCategory] = useState("");
  const { category, categoryHandler } = props;
  return (
    <div className="d-flex justify-content-center my-5">
      <form className="form" action="">
        <select
          class="border"
          value={category}
          onChange={(e) => categoryHandler(e)}
          aria-label="Default select example"
        >
          <option value="0" selected>
            Category
          </option>
          <option value="Pegion">One</option>
          <option value="Parrot">Two</option>
          <option value="3">Three</option>
        </select>
        <input placeholder="What ?" type="text" className="border" />
        <input placeholder={"Where ?"} type="text" className="border" />
        <button className="btn btn-success px-4">&#160; Find</button>
      </form>
    </div>
  );
}
