import React from "react";
import { Stats } from "./Stats";
import { Vistors } from "./Vistors";
import { Todo } from "./Todo";

export const Dashboard = () => {
  return (
    <div>
      <Stats />
      <Vistors />
      <Todo />
    </div>
  );
};
