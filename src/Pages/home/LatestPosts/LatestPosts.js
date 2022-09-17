import React from "react";
import "./LatestPosts.scss";
import { Link } from "react-router-dom";
import chickenWings from "../../../Assets/Images/home/chickenWings.jpg";
import chocolateChip from "../../../Assets/Images/home/chocolateChip.jpg";
import friedRice from "../../../Assets/Images/home/friedRice.jpg";
import misoRamen from "../../../Assets/Images/home/misoRamen.jpg";
import tomatoSoup from "../../../Assets/Images/home/tomatoSoup.jpg";
import veggieBurger from "../../../Assets/Images/home/veggieBurger.jpg";

const LatestPosts = () => {
  return (
    <div
      style={{ maxWidth: "1100px" }}
      className="latest-recipes container mt-5"
    >
      <div className="container">
        <h2 className="secondary mb-4">
          Latest recipes <i className="fa-solid fa-utensils"></i>
        </h2>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4 mb-5">
            <article className="text-center post">
              <div className="post-img">
                <img src={tomatoSoup} alt="Tomato Soup" className="img-fluid" />
                <div className="category">
                  <span>Gluten Free</span>
                </div>
              </div>
              <div className="post-content">
                <h2>Easy Tomato Soup</h2>
                <p className="px-5 px-md-3">
                  Easy Tomato Soup is a{" "}
                  <b>gluten free, lacto ovo vegetarian, and primal</b> recipe
                  with 2 servings. One serving contains <b>299 calories</b>,{" "}
                  <b>4g of protein</b>, and <b>23g of fat</b>. For{" "}
                  <b>$2.09 per serving</b>, this recipe <b>covers 14%</b> of
                  your daily requirements of vitamins and minerals...
                </p>
              </div>
              <div className="more text-center mt-5">
                <Link to="recipes/1674265">Continue Reading &#8674;</Link>
              </div>
            </article>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 mb-5">
            <article className="text-center post">
              <div className="post-img">
                <img
                  src={chickenWings}
                  alt="Crispy Sweet Sticky Spicy Wings"
                  className="img-fluid"
                />
                <div className="category">
                  <span>Appetizer</span>
                </div>
              </div>
              <div className="post-content">
                <h2>Sweet Sticky Spicy Wings</h2>
                <p className="px-5 px-md-3">
                  The recipe Crispy Sweet Sticky Spicy Wings can be made{" "}
                  <b>in around about 45 minutes</b>. One serving contains{" "}
                  <b>600 calories</b>, <b>30g of protein</b>, and{" "}
                  <b>24g of fat</b>. This recipe serves 6. For{" "}
                  <b>$1.85 per serving</b>, this recipe <b>covers 20%</b> of
                  your daily requirements of...
                </p>
              </div>
              <div className="more text-center mt-5">
                <Link to="recipes/640841">Continue Reading &#8674;</Link>
              </div>
            </article>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 mb-5">
            <article className="text-center post">
              <div className="post-img">
                <img
                  src={veggieBurger}
                  alt="black bean and veggie burgers with corn salsa"
                  className="img-fluid"
                />
                <div className="category">
                  <span>Vegetarian</span>
                </div>
              </div>
              <div className="post-content">
                <h2>Black Bean Veggie Burgers</h2>
                <p className="px-5 px-md-3">
                  Forget going out to eat or ordering takeout every time you
                  crave American food. Try making Just Julie’s BBQ Spicy Black
                  Bean Burgers at home. Watching your figure? This gluten free
                  and dairy free recipe has <b>194 calories</b>,{" "}
                  <b>7g of protein</b>, and <b>8g of fat</b> per serving. This
                  recipe serves...
                </p>
              </div>
              <div className="more text-center mt-5">
                <Link to="recipes/648663">Continue Reading &#8674;</Link>
              </div>
            </article>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 mb-5">
            <article className="text-center post">
              <div className="post-img">
                <img
                  src={misoRamen}
                  alt="Chicken and Miso Ramen noodle soup"
                  className="img-fluid"
                />
                <div className="category">
                  <span>Chicken</span>
                </div>
              </div>
              <div className="post-content">
                <h2>Chicken and Miso Ramen</h2>
                <p className="px-5 px-md-3">
                  The recipe Chicken and Miso Ramen Noodle Soup is ready{" "}
                  <b>in approximately 30 minutes</b> and is definitely an
                  awesome <b>dairy free</b> option for lovers of Japanese food.
                  One serving contains <b>616 calories</b>,{" "}
                  <b>43g of protein</b>, and <b>14g of fat</b>. For{" "}
                  <b>$3.46 per serving</b>, this recipe <b>covers 34%</b> of...
                </p>
              </div>
              <div className="more text-center mt-5">
                <Link to="recipes/637908">Continue Reading &#8674;</Link>
              </div>
            </article>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 mb-5">
            <article className="text-center post">
              <div className="post-img">
                <img
                  src={chocolateChip}
                  alt="Chocolate Chip Cookies"
                  className="img-fluid"
                />
                <div className="category">
                  <span>Dessert</span>
                </div>
              </div>
              <div className="post-content">
                <h2>Chocolate Chip Cookies</h2>
                <p className="px-5 px-md-3">
                  Chocolate Chip Cookies might be just the dessert you are
                  searching for. For <b>$1.52 per serving</b>, this recipe{" "}
                  <b>covers 15%</b> of your daily requirements of vitamins and
                  minerals. This recipe makes 6 servings with{" "}
                  <b>932 calories</b>, <b>9g of protein</b>, and{" "}
                  <b>49g of fat</b> each. 892 people were impressed...
                </p>
              </div>
              <div className="more text-center mt-5">
                <Link to="recipes/637822">Continue Reading &#8674;</Link>
              </div>
            </article>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 mb-5">
            <article className="text-center post">
              <div className="post-img">
                <img
                  src={friedRice}
                  alt="Shrimp Fried Rice"
                  className="img-fluid"
                />
                <div className="category">
                  <span>Pescatarian</span>
                </div>
              </div>
              <div className="post-content">
                <h2>Shrimp Fried Rice</h2>
                <p className="px-5 px-md-3">
                  The recipe Shrimp Fried Rice is ready{" "}
                  <b>in roughly 45 minutes</b> and is definitely a super{" "}
                  <b>gluten free and pescatarian</b> option for lovers of
                  Chinese food. For <b>$1.36 per serving</b>, you get a main
                  course that serves 4. One serving contains <b>400 calories</b>
                  , <b>16g of protein</b>, and <b>8g of fat</b>. Not a lot...
                </p>
              </div>
              <div className="more text-center mt-5">
                <Link to="recipes/682619">Continue Reading &#8674;</Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
