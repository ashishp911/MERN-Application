import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  // Using promises
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        navigate("/login");
        if (!res.status === 200) {
          throw new Error(res.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <div></div>;
};

export default Logout;
