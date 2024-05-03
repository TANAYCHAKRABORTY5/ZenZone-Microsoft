import React, { useContext, useState } from "react";
import Username from "./Username";
import "./index.css";
import Activemain from "./Activemain";
import { PostContext } from "../../context/PostContext.jsx";

function Blog() {
  const [username, setusername] = useState("");
  // const [active, setActive] = useState(false);
  const { active, setActive } = useContext(PostContext);

  return (
    <main style={{ backgroundColor: "white" }}>
      {!active ? (
        <Username
          setusername={setusername}
          setActive={setActive}
          username={username}
        />
      ) : (
        <Activemain username={username} />
      )}
    </main>
  );
}

export default Blog;
