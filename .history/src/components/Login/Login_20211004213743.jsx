import React, { useState } from "react";

export default function Login() {
  const [users, setUsers] = useState([
    {
      name: "saud",
      age: 22,
      id: "SP19-BCS-078",
    },
  ]);
  return (
    <div>
      {users.map((user) => (
        <h1>{user.name}</h1>
      ))}
    </div>
  );
}
