import React, { useContext, useState } from "react";
import "./AddPost.css"; // Import CSS file for styles
// import axios from "axios";
import { PostContext } from "../../context/PostContext.jsx";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [disc, setDisc] = useState("");
  const [image, setImage] = useState(null);

  const { handleAddPost } = useContext(PostContext);

  const handleDiscChange = (e) => {
    setDisc(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleAddPost({
      disc: disc,
      image: image,
    });
    navigate("/blog");
    console.log(response);
  };

  return (
    <div className="add-post-container" style={{ background: "white" }}>
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit} className="add-post-form">
        <div className="form-group">
          <label htmlFor="disc">Post Description:</label>
          <input
            type="text"
            id="disc"
            value={disc}
            onChange={handleDiscChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:(optional)</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="form-control-file"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;
