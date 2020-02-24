import React from "react";
import { Navigation } from "./Navigation";
import { Stats } from "./Stats";
import { Vistors } from "./Vistors";
import { Todo } from "./Todo";

export const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <Stats />
      <Vistors />
      <Todo />
    </div>
  );
};
