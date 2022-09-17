import { React, useState, useEffect } from "react";
import client from "../../../http-common";
import SmallPost from "../../../Components/SmallPost/SmallPost";
import{ Link} from "react-router-dom"
const Cuisines = ({ cuisine, iconColor }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    let saved = false
    //retrieve saved recipes from local storage and save to state
    if (!saved) {
    let data = JSON.parse(localStorage.getItem(`"${cuisine}"`));

    if (data) {
      setRecipes(data);
    } else {
      // retrieve recipes from api if not found in local storage
      client
        .get("complexSearch", {
          params: {
            cuisine,
            apiKey: process.env.REACT_APP_API_KEY,
            number: 4,
          },
        })
        .then(function (res) {
          setRecipes(res.data.results);
          localStorage.setItem(`"${cuisine}"`, JSON.stringify(res.data.results));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
    return () => {
      saved = true
    }
  }, [cuisine]); 

  return (
    <div style={{ maxWidth: "1100px", marginTop: "10rem", marginBottom: "10rem" }}
      className="cuisines container">
      <div className="container">
        <h3 style={{ marginBottom: "2rem" }} className="tertiary">
          {cuisine} recipes{" "}
          <i
            style={{ color: `${iconColor}`, fontSize: "3rem" }}
            className="fa-solid fa-utensils"
          ></i>
        </h3>
        <div className="row">
          {recipes.map((recipe) => (
            <SmallPost
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              img={recipe.image}
            />
          ))}
        </div>
        <div className="more text-center mt-5">
          <Link to={`recipes/category/${cuisine}`}>More {cuisine} recipes</Link>
        </div>
      </div>
    </div>
  );
};

export default Cuisines;
