import React from "react";
import { Navigation } from "../../Navigation/Navigation";
import { Footer } from "../../Navigation/Footer";
import { Stats } from "./Stats";
import { Middle } from "./Middle/MiddlePortion";
import { Bottom } from "./Bottom/BottomPortion";

export const Dashboard = props => {
  return (
    <div>
      <Navigation />
      <Stats key={props.id} data={props} />
      <Middle />
      <Bottom />
      <Footer />
    </div>
  );
};
