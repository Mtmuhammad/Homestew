import { React, useState, useEffect } from "react";
import SmallPost from "../../../Components/SmallPost/SmallPost";
import Spinner from "../../../Components/Spinner/Spinner";
import client from "../../../http-common";

const Type = ({ type }) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    client
      .get("complexSearch", {
        params: {
          type,
          apiKey: process.env.REACT_APP_API_KEY,
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
  }, [type]);
  return (
    <>
      {" "}
      <h3 style={{ marginBottom: "2rem" }} className="tertiary">
        {type} recipes{" "}
        <i
          style={{
            color: "#008080",
            fontSize: "3rem",
          }}
          className="fa-solid fa-utensils"
        ></i>
      </h3>
      <div className="row">
        {isLoading && <Spinner />}
        {recipes && recipes.map((recipe) => (
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

export default Type;
