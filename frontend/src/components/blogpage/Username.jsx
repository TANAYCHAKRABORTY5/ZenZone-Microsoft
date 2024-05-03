import React from "react";
import axios from "axios";
function Username({ setusername, setActive, username }) {
  const registerUser = async (e) => {
    e.preventDefault();
    // const response = await axios.post(
    //   "http://localhost:8000/api/v1/client/loginregclient",
    //   { username },
    //   {
    //     Headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // const data = response.data.data;
    // if (data) {
    // document.cookie = `user=${username};path=/`;
    setActive(true);
    // } else {
    //   alert("username is required.");
    // }
  };

  return (
    <div class="username">
      <h3>Enter your username</h3>
      <form action="">
        <input
          class="gettext"
          type="text"
          placeholder="Enter UserName"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <button
          class="click"
          onClick={(e) => username.length > 5 && registerUser(e)}
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Username;
