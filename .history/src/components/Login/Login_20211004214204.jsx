import React, { useState } from "react";

export default function Login() {
  const [users, setUsers] = useState([]);
  if (users.length === 0) {
    return <h1>No user Found</h1>;
  }
  return (
    <div>
      {users.map((user) => (
        <h4>{user.name}</h4>
      ))}
    </div>
  );
}
