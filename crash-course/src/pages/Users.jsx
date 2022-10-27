import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  async function fetchUser() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUser(data);
  }

  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <div>
      <div>{user.id}</div>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.username}</div>
    </div>
  );
}

export default Users;
