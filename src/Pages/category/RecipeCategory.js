import {React, useEffect} from "react";
import { useParams } from "react-router-dom";
import Category from "./Category/Category";

const RecipeCategory = () => {
  const { category } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div
      style={{ maxWidth: "1100px", marginTop: "6rem", marginBottom: "6rem" }}
      className="cuisines container"
    >
      <div className="container">
        <Category category={category} />
      </div>
    </div>
  );
};

export default RecipeCategory;
