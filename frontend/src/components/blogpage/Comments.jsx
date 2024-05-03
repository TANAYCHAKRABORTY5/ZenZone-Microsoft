import React from "react";
import "./commnets.css";
function Comments() {
  const comments = [
    {
      owner: "John",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec lorem nec massa tincidunt ultrices.",
    },
    {
      owner: "Alice",
      text: "Sed non magna vitae risus varius blandit. Nullam eget dolor euismod, condimentum arcu ac, interdum libero.",
    },
    {
      owner: "Bob",
      text: "Praesent lobortis sapien vitae magna scelerisque, id vestibulum risus pellentesque. Sed at leo nec sapien elementum volutpat.",
    },
  ];
  return (
    // <div class="comments">
    //   <div class="amount">
    //     <h4>1000 comments</h4>

    //     <div class="fliter">
    //       <a href="">
    //         Fliter by supreme
    //         <img src="../blogimages/down.png" alt="" />
    //       </a>
    //       <a href="">
    //         Top Recommendation
    //         <img src="../blogimages/down.png" alt="" />
    //       </a>
    //     </div>
    //   </div>
    //   <div class="comment">
    //     <div class="cm1">
    //       <div class="like">
    //         <img
    //           src="../blogimages/like-1--reward-social-up-rating-media-like-thumb-hand.png"
    //           alt=""
    //         />
    //         <p>4.2k</p>
    //       </div>
    //       <div class="post">
    //         <div class="heading">
    //           <p>
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat corporis omnis
    //             laudantium id amet dolores?
    //           </p>
    //           <div class="time">
    //             4 hours agao by <strong>xyz</strong>
    //           </div>
    //         </div>
    //       </div>

    //       <img src="../blogimages/dots.png" alt="" />
    //     </div>
    //     <div class="cm1">
    //       <div class="like">
    //         <img
    //           src="../blogimages/like-1--reward-social-up-rating-media-like-thumb-hand.png"
    //           alt=""
    //         />
    //         <p>3.2k</p>
    //       </div>
    //       <div class="post">
    //         <div class="heading">
    //           <p>
    //             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate reiciendis
    //             nostrum{" "}
    //           </p>
    //           <div class="time">
    //             4 hours agao by <strong>xyz</strong>
    //           </div>
    //         </div>
    //       </div>
    //       <img src="../blogimages/dots.png" alt="" />
    //     </div>
    //     <div class="cm1">
    //       <div class="like">
    //         <img
    //           src="../blogimages/like-1--reward-social-up-rating-media-like-thumb-hand.png"
    //           alt=""
    //         />
    //         <p>10k</p>
    //       </div>
    //       <div class="post">
    //         <div class="heading">
    //           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate veritatis</p>
    //           <div class="time">
    //             4 hours agao by <strong>xyz</strong>
    //           </div>
    //         </div>
    //       </div>
    //       <img src="../blogimages/dots.png" alt="" />
    //     </div>
    //     <div class="cm1">
    //       <div class="like">
    //         <img
    //           src="../blogimages/like-1--reward-social-up-rating-media-like-thumb-hand.png"
    //           alt=""
    //         />
    //         <p>44.5k</p>
    //       </div>
    //       <div class="post">
    //         <div class="heading">
    //           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nosm.</p>
    //           <div class="time">
    //             4 hours agao by <strong>xyz</strong>
    //           </div>
    //         </div>
    //       </div>
    //       <img src="../blogimages/dots.png" alt="" />
    //     </div>
    //   </div>
    // </div>
    <div className="comments">
      <div className="comment-section">
        <h3>Comments</h3>
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <span className="comment-owner">{comment.owner}</span>
            <p className="comment-text">{comment.text}</p>
            <div className="comment-actions">
              <button className="like-button">Like</button>
              <button className="reply-button">Reply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
