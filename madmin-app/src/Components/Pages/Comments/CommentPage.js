import React, { useContext } from "react";
import { Navigation } from "../../Navigation/Navigation";
import { Comments } from "./CommentList";
import { GlobalContext } from "../../../Context/GlobalState";
import { Footer } from "../../Navigation/Footer";

export const CommentPage = () => {
  const { comments } = useContext(GlobalContext);
  return (
    <div>
      <Navigation />
      <section className="section section-comments grey lighten-4">
        <div className="container">
          <Comments comments={comments} />
        </div>
      </section>
      <Footer />
    </div>
  );
};
