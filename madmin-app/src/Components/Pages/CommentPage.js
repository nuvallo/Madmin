import React from "react";
import { Navigation } from "../Navigation/Navigation";
import { Comments } from "./Comments";
import { Footer } from "../Navigation/Footer";

export const CommentPage = () => {
  return (
    <div>
      <Navigation />
      <Comments />
      <Footer />
    </div>
  );
};
