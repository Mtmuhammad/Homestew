import { React, useState, useEffect } from "react";
import "./SearchBar.scss";
import client from "../../../http-common";
import SmallPost from "../../../Components/SmallPost/SmallPost";
import Spinner from "../../../Components/Spinner/Spinner";


const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(56);

  useEffect(() => {
    setIsLoading(true);
    // parse local storage for saved random recipes
    let result = JSON.parse(localStorage.getItem("random"));

    //if found, add to state; else make api call, add results to state and local storage
    if (result) {
      setRandomRecipes(result);
      setIsLoading(false);
    } else {
      const getRandomRecipes = () => {
        setIsLoading(true);
        client
          .get("random", {
            params: {
              apiKey: process.env.REACT_APP_API_KEY4,
              number: 56,
            },
          })
          .then(function (res) {
            setRandomRecipes(res.data.recipes);
            setIsLoading(false);
            localStorage.setItem("random", JSON.stringify(res.data.recipes));
          })
          .catch(function (error) {
            console.log(error);
          });
      };

      getRandomRecipes();
    }
  }, []);

  const getRecipes = () => {
    // removes any recipe list 
    if (randomRecipes) removeRandom();
    if (recipes) removeRecipes();

    // changes state of random recipes to ensure data is not appended to DOM 
    setRandomRecipes([]);
    setIsLoading(true);
    // "value" will be used to check if the query has changed
    setValue(query);
    client
      .get("complexSearch", {
        params: {
          query,
          apiKey: process.env.REACT_APP_API_KEY2,
          number: 56,
        },
      })
      .then(function (res) {
        setRecipes(res.data.results);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getMoreRecipes = () => {
    setIsLoading(true);
    // if the value of the query has not changed, fetch more recipes
    if (query === value) {
      client
        .get("complexSearch", {
          params: {
            query,
            apiKey: process.env.REACT_APP_API_KEY4,
            number: 28,
            offset,
          },
        })
        .then(function (res) {
          setRecipes([...recipes, ...res.data.results]);
          setIsLoading(false);
          setOffset(offset + 28);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  //removes recipes from DOM
  const removeRecipes = () => {
    recipes.map((recipe) => delete document.getElementById(recipe.id));
  };

  //removes random recipes from DOM 
  const removeRandom = () => {
    randomRecipes.map((recipe) => delete document.getElementById(recipe.id));
  };

  return (
    <div className="mt-5 container">
      
        <h2 className="h1 text-center mb-3">What are you in the mood for?</h2>
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="search text-center">
              <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control"
                placeholder="Search by keyword"
                name="query"
                id="text-input"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                className="search-button"
                onClick={(e) => {
                  getRecipes();
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      

      <div id="recipe-row" className="row">
        {isLoading && <Spinner />}
        {value !== "" && (
          <h2>{query === value ? `Search results for ${query}` : ""}</h2>
        )}

        {randomRecipes &&
          randomRecipes.map((recipe) => (
            <SmallPost
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              img={recipe.image}
            />
          ))}
        {recipes &&
          recipes.map((recipe) => (
            <SmallPost
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              img={recipe.image}
            />
          ))}
        {recipes.length > 0 && (
          
            <div className="text-center mb-3">
              <button
                onClick={getMoreRecipes}
                style={{ margin: "1.5rem auto", width: "125px" }}
                className="search-button"
              >
                {isLoading && recipes ? "Loading.." : "Load More"}
              </button>
            </div>
          
        )}
      </div>
    </div>
  );
};

export default SearchBar;
