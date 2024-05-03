import React, { createContext, useState } from "react";

// Create the CartContext
const PostContext = createContext();

// Create a CartProvider component to wrap your app with the context provider
const PostProvider = ({ children }) => {
  const [post, setPost] = useState([{}]);
  const [active, setActive] = useState(false);

  const handleAddPost = (item) => {
    setPost([...post, item]);
  };

  return (
    <PostContext.Provider
      value={{ post, setPost, handleAddPost, active, setActive }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
