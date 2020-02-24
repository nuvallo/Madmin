import React, { useContext } from "react";
import { Navigation } from "../../Navigation/Navigation";
import { GlobalContext } from "../../../Context/GlobalState";
import { Category } from "./CategoryList";

export const CategoryPage = () => {
  const { categories } = useContext(GlobalContext);

  return (
    <div>
      <Navigation />
      <section className="section section-categories grey lighten-4">
        <div className="container">
          <Category categories={categories} />
        </div>
      </section>
    </div>
  );
};
