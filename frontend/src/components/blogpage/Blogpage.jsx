import React, { useContext } from "react";
import { PostContext } from "../../context/PostContext";

function Blogpage() {
  const { post } = useContext(PostContext);
  console.log(post);
  return (
    <div class="blogspage" style={{ background: "#eeeeee" }}>
      <div class="blog">
        <div class="like">
          <img
            src="../blogimages/like-1--reward-social-up-rating-media-like-thumb-hand.png"
            alt=""
          />
          <p>44.5k</p>
        </div>

        {post.length > 0 && (
          <div class="post">
            <div class="heading">
              <p>{post[post.length - 1].disc}</p>
              <div class="time">
                4 hours agao by <strong>xyz</strong>
              </div>
            </div>

            <div class="postimg">
              <img
                //
                src="../blogimages/4ac7f79af416b26299787148fcbf81a0.png"
                alt=""
              />
            </div>
          </div>
        )}
        {/* <div class="heading">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nostrum.</p>
            <div class="time">
              4 hours agao by <strong>xyz</strong>
            </div>
          </div>

          <div class="postimg">
            <img src="../blogimages/4ac7f79af416b26299787148fcbf81a0.png" alt="" />
          </div> */}
      </div>
    </div>
  );
}

export default Blogpage;
