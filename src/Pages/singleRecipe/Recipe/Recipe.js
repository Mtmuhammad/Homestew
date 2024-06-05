import { React, useState, useEffect } from "react";
import Spinner from "../../../Components/Spinner/Spinner";
import client from "../../../http-common";
import "./Recipe.scss";

const Recipe = ({ id }) => {
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [dishTypes, setDishTypes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState([]);
  const [tags, setTags] = useState([]);
  const [wines, setWines] = useState([]);
  const [wineText, setWineText] = useState("");
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const getQuote = () => {
      client
        .get(process.env.REACT_APP_QUOTE_API_URL, {
          headers: {
            "X-Api-Key": process.env.REACT_APP_QUOTE_API_KEY,
          },
        })
        .then(function (res) {
          setQuote(res.data[0]);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    const getRecipe = () => {
      setIsLoading(true);
      client
        .get(`${id}/information`, {
          params: {
            apiKey: process.env.REACT_APP_API_KEY3,
            addWinePairing: true
          },
        })
        .then(function (res) {
          setRecipe(res.data);
          setDishTypes(res.data.dishTypes);
          setIngredients(res.data.extendedIngredients);
          setDirections(res.data.analyzedInstructions[0].steps);
          setTags(res.data.diets);
          setWines(res.data.winePairing.pairedWines);
          setWineText(res.data.winePairing.pairingText);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    getRecipe();
    getQuote();
  }, [id]);

  return (
    <>
      {isLoading && <Spinner />}
      {recipe && (
        <>
          <div className="col-lg-12">
            <img
              className="img-fluid single-recipe-img"
              src={recipe.image}
              alt={recipe.title}
            />
          </div>

          <div className="col-lg-8 mx-auto">
            <div className="single-recipe-title">
              <div className="single-post-title-text">
                <ul className="ps-0 label">
                  {dishTypes.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <h4>{recipe.title}</h4>
                <ul className="ps-0 widget">
                  <li>by {recipe.sourceName || "Anonymous"}</li>
                  <li>{recipe.healthScore}% recommend this recipe</li>
                  <li>
                    <i className="me-2 fa-solid fa-heart"></i>{" "}
                    {recipe.aggregateLikes} Likes{" "}
                  </li>
                </ul>
              </div>
            </div>

            <div className="single-recipe-description">
              <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
            </div>

            <blockquote className="single-recipe-quote">
              <h5>
                <i className="fa-solid fa-quote-left"></i> {quote.quote}{" "}
                <i className="fa-solid fa-quote-right"></i>
              </h5>
              <h6 className="text-muted">{quote.author}</h6>
            </blockquote>

            <div className="single-recipe-description">
              <p dangerouslySetInnerHTML={{ __html: wineText }}></p>
            </div>

            <div className="single-recipe-options text-center">
              <ul>
                <li>
                  <h5>
                    <i className="fa fa-user"></i> SERVES
                  </h5>
                  <span>{recipe.servings} People</span>
                </li>
                <li>
                  <h5>
                    <i className="fa fa-clock-o"></i> PREP TIME
                  </h5>
                  <span>
                    {recipe.preparationMinutes === -1
                      ? `less than ${Math.abs(
                          recipe.preparationMinutes
                        )} minute`
                      : `${recipe.preparationMinutes} minutes`}
                  </span>
                </li>
                <li>
                  <h5>
                    <i className="fa fa-clock-o"></i> Cook TIME
                  </h5>
                  <span>
                    {recipe.readyInMinutes === -1
                      ? `less than ${Math.abs(recipe.readyInMinutes)} minute`
                      : `${recipe.readyInMinutes} minutes`}
                  </span>
                </li>
                <li>
                  <a href="#0" className="print-btn">
                    <i className="fa fa-print"></i> Print
                  </a>
                </li>
              </ul>
            </div>

            <div className="single-recipe-ingredients tables">
              <h5>
                Ingredients <i className="fa-solid fa-utensils"></i>
              </h5>
              <ul className="ps-0">
                {ingredients.map((i) => (
                  <li key={i.original}>{i.original}</li>
                ))}
              </ul>
            </div>
            <div className="single-recipe-directions tables mb-5">
              <h5>
                Directions <i className="fa-solid fa-utensils"></i>
              </h5>
              <ol className="ps-0">
                {directions.map((d) => (
                  <li key={d.number}>{d.step}</li>
                ))}
              </ol>
            </div>
            <div className="single-recipe-tags">
              <ul className="d-flex flex-wrap ps-0">
                {tags && tags.map((t) => <li key={t}>{t}</li>)}
                {wines && wines.map((w) => <li key={w}>{w}</li>)}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Recipe;
