import React from "react";
import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Navigation/Footer";
import { Posts } from "./Posts";

export const PostPage = () => {
  return (
    <div className="post-page">
      <Navigation />
      <Posts />
      <Footer />
    </div>
  );
};
