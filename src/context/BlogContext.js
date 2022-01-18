import React from "react";

const BlogContext = React.createContext();

const blogPosts = [{ title: "blog post 1" }, { title: "blog post 2" }];

export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>;
};

export default BlogContext;
