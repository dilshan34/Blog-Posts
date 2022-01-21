import React, { useReducer, useState } from "react";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "delete_blogpost":
      return state.filter((blogPosts) => blogPosts.id !== action.payload);
    case "add_blogpost":
      return [
        ...state,
        {
          title: `Blogpost ${state.length + 1}`,
          id: (Math.random() * 10000000).toFixed(0),
        },
      ];

    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: "add_blogpost" });
  };

  const deleteBlogPost = (id) => {
    console.log("id",id);
    dispatch({ type: "delete_blogpost", payload: id });
  };

  return (
    <BlogContext.Provider
      value={{ data: blogPosts, addBlogPost, deleteBlogPost }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
