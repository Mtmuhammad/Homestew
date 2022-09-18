import { React, useState, useEffect } from "react";
import SmallPost from "../../../Components/SmallPost/SmallPost";
import Spinner from "../../../Components/Spinner/Spinner";
import client from "../../../http-common";

const Category = ({ category }) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    client
      .get("complexSearch", {
        params: {
          cuisine: category,
          apiKey: process.env.REACT_APP_API_KEY3,
          number: 28,
        },
      })
      .then(function (res) {
        setRecipes(res.data.results);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [category]);

  return (
    <>
      <h3 style={{ marginBottom: "2rem" }} className="tertiary">
        {category} recipes{" "}
        <i
          style={{
            color: "#875b8c",
            fontSize: "3rem",
          }}
          className="fa-solid fa-utensils"
        ></i>
      </h3>
      <div className="row">
        {isLoading && <Spinner />}
        {recipes.map((recipe) => (
          <SmallPost
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            img={recipe.image}
          />
        ))}
      </div>
    </>
  );
};

export default Category;
