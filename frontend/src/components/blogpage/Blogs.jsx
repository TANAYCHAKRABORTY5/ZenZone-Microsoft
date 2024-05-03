import React from "react";
import Blogpage from "./Blogpage";
import Comments from "./Comments";
import Recentpost from "./Recentpost";
import { Link } from "react-router-dom";

function Blogs({ username }) {
  return (
    <div className="blogs" style={{ background: "white" }}>
      <nav>
        <div class="nav1">
          <img src="../blogimages/back.png" alt="back" />
          <p>Today I Learned</p>
          <div class="subs">
            <p>{username}</p>
            <img src="../blogimages/Path.png" alt="X" />
          </div>
        </div>
        <div class="nav2">
          <Link to="/blog/addpost">
            <button style={{ marginRight: "5px", padding: "10px" }}>Add Post</button>
          </Link>
          <img src="../blogimages/information.png" alt="!" />
          <img src="../blogimages/dots.png" alt="O" />
        </div>
      </nav>
      <Blogpage />
      <Comments />
      <Recentpost />
    </div>
  );
}

export default Blogs;
