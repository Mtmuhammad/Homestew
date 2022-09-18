import {React, useEffect} from "react";
import { useParams } from "react-router-dom";
import Recipe from "./Recipe/Recipe"

const SingleRecipe = () => {
  let { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container single-recipe" style={{ maxWidth: "1100px" }}>
      <div className="container text-center">
        <div className="row">
          <Recipe id={id}/>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
