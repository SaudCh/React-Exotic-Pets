import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [users, setUsers] = useState([
    {
      name: "saud",
      age: 22,
      id: "SP19-BCS-078",
    },
  ]);
  if (users.length === 0) {
    return <h1>No user Found</h1>;
  }
  return (
    <div>
      {users.map((user) => (
        <Link to={`/${user.key}/birds `}>
          <h4>{user.name}</h4>
        </Link>
      ))}
    </div>
  );
}
