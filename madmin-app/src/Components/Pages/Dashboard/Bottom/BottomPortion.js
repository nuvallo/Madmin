import React from "react";
import { RecentPosts } from "./RecentPosts";
import { Todo } from "./Todo";

export const Bottom = () => {
  return (
    <section className="section section-recent">
      <div className="row">
        <RecentPosts />
        <Todo />
      </div>
    </section>
  );
};
