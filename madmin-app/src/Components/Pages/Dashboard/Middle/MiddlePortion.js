import React from "react";
import { Chart } from "./Chart";
import { Comments } from "./Comments";

export const Middle = () => {
  return (
    <section className="section section-visitors blue lighten-4">
      <div className="row">
        <Chart />
        <Comments />
      </div>
    </section>
  );
};
