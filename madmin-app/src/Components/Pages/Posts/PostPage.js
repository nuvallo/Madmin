import React, { useContext } from "react";
import { Navigation } from "../../Navigation/Navigation";
import { Footer } from "../../Navigation/Footer";
import { Posts } from "./PostList";
import { GlobalContext } from "../../../Context/GlobalState";

export const PostPage = () => {
  const { posts } = useContext(GlobalContext);
  return (
    <div className="post-page">
      <Navigation />
      <section className="section section-posts grey lighten-4">
        <div className="container">
          <Posts posts={posts} />
        </div>
      </section>
      <Footer />
    </div>
  );
};
