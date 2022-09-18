import{ React, useEffect} from "react";
import { useParams } from "react-router-dom";
import Type from "./Type/Type";

const RecipeType = () => {
  const { type } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div
      style={{ maxWidth: "1100px", marginTop: "6rem", marginBottom: "6rem" }}
      className="cuisines container"
    >
      <div className="container">
        <Type type={type} />
      </div>
    </div>
  );
};

export default RecipeType;
