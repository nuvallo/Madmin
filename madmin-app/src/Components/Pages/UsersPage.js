import React from "react";
import { Navigation } from "../Navigation/Navigation";
import { Users } from "./Users";
import { Footer } from "../Navigation/Footer";
export const UsersPage = () => {
  return (
    <div>
      <Navigation />
      <Users />
      <Footer />
    </div>
  );
};
