import React from "react";
import DietCard from "./DietCard/DietCard";
import glutenFree from "../../Assets/Images/diets/glutenFree.jpg"
import ketogenic from "../../Assets/Images/diets/ketogenic.jpg"
import lactoVegetarian from "../../Assets/Images/diets/lactoVegetarian.jpg"
import ovoVegetarian from "../../Assets/Images/diets/ovoVegetarian.jpg"
import paleo from "../../Assets/Images/diets/paleo.jpg"
import pescetarian from "../../Assets/Images/diets/pescetarian.jpg"
import primal from "../../Assets/Images/diets/primal.jpg"
import vegan from "../../Assets/Images/diets/vegan.jpg"
import vegetarian from "../../Assets/Images/diets/vegetarian.jpg"
import whole30 from "../../Assets/Images/diets/whole30.jpg"

const Diets = () => {
  return (
    <div style={{ maxWidth: "1100px" }} className="diet container mt-5">
      <div className="container">
        <h2 className="secondary mb-4">
          Special Diets <i className="fa-solid fa-utensils"></i>
        </h2>

        <div className="row">
          <DietCard
            title={"Gluten Free"}
            img={glutenFree}
            text={
              "A gluten-free diet is an eating plan that excludes foods containing gluten and is essential for managing signs and symptoms of celiac disease and other medical conditions associated with gluten.. Gluten is a protein found in wheat, barley, rye and triticale (a cross between wheat and rye)."
            }
          />
          <DietCard
            title={"Ketogenic"}
            img={ketogenic}
            text={
              "“Ketogenic” is a term for a low-carb diet (like the Atkins diet). The idea is for you to get more calories from protein and fat and less from carbohydrates. You cut back most on the carbs that are easy to digest, like sugar, soda, pastries, and white bread."
            }
          />
          <DietCard
            title={"Vegetarian"}
            img={vegetarian}
            text={
              "Vegetarian diets contain various levels of fruits, vegetables, grains, pulses, nuts and seeds. The inclusion of dairy and eggs depends on the type of diet you follow."
            }
          />
          <DietCard
            title={"Lacto-Vegetarian"}
            img={lactoVegetarian}
            text={
              "The lacto-vegetarian diet is a type of vegetarianism that excludes meat, poultry, seafood, and eggs, but includes dairy products. People may choose to adopt a lacto-vegetarian diet for environmental, ethical, or health reasons."
            }
          />
          <DietCard
            title={"Ovo-Vegetarian"}
            img={ovoVegetarian}
            text={
              "An ovo-vegetarian diet can include all fruits, vegetables, squashes, legumes, beans, and grains such as rice, quinoa, and barley; all seeds, spices and fresh herbs, eggs and products containing eggs such as egg whites, mayonnaise, egg noodles and some baked goods."
            }
          />
          <DietCard
            title={"Vegan"}
            img={vegan}
            text={
              "Veganism is the practice of abstaining from the use of animal products, particularly in diet, and an associated philosophy that rejects the commodity status of animals."
            }
          />
          <DietCard
            title={"Pescetarian"}
            img={pescetarian}
            text={
              "In the pescatarian diet, a person’s main source of animal protein comes from fish and other seafood, such as shrimp. Eating a diet consisting mainly of plant-based foods has a variety of health benefits, which the addition of fish and fish products may enhance."
            }
          />
          <DietCard
            title={"Paleo"}
            img={paleo}
            text={
              "A paleo diet typically includes lean meats, fish, fruits, vegetables, nuts and seeds — foods that in the past could be obtained by hunting and gathering. A paleo diet limits foods that became common when farming emerged about 10,000 years ago. These foods include dairy products, legumes and grains."
            }
          />
          <DietCard
            title={"Primal"}
            img={primal}
            text={
              "The Primal Diet is an eating pattern that’s high in protein and fat, low in carbs, and designed to closely resemble the presumed diet of early humans."
            }
          />
          <DietCard
            title={"Whole 30"}
            img={whole30}
            text={
              "The Whole30 diet is a month-long clean-eating program that promises a variety of health and emotional benefits. The diet focuses on the idea that certain food groups may negatively affect your health and fitness."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Diets;
