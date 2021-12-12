import React, { useState } from "react";
import Select from "react-select";
import { getCities } from "../data/cities";

export default function LiveSearch() {
  const options = getCities();
  const [location, setLocation] = useState();

  return (
    <div>
      <Select
        options={options}
        isClearable={true}
        placeholder={"Location"}
        value={location}
        onChange={setLocation}
        //onChange={(e) => console.log(e.value)}
      />
    </div>
  );
}
