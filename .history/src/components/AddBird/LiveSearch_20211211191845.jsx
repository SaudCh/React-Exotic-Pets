import React from "react";
import Select from "react-select";
import { getCities } from "../data/cities";

export default function LiveSearch() {
  const options = getCities();

  return (
    <div>
      <Select
        options={options}
        isClearable={true}
        placeholder={"Location"}
        onChange={(e) => console.log(e.value)}
      />
    </div>
  );
}
