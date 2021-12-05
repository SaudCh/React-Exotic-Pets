import React from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../data/users";

export default function Login() {
  const users = getUsers();
  if (users.length === 0) {
    return <h1>No user Found</h1>;
  }
  return (
    <div>
      {users.map((user) => (
        <div
          style={{
            margin: 10,
            border: "1px solid black",
            borderRadius: 10,
            padding: 50,
          }}
        >
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to={`/birds/${user.id}`}
          >
            <h4>{user.name}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
}
