import React, { useState } from "react";
import Select from "react-select";
import { getCities } from "../data/cities";

export default function LiveSearch(props) {
  const { val, setVal } = props;
  const options = getCities();

  return (
    <div>
      <Select
        options={options}
        isClearable={true}
        placeholder={"Location"}
        value={val}
        onChange={setVal}
        //onChange={(e) => console.log(e.value)}
      />
    </div>
  );
}
