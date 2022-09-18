import "./Styles/base/_base.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Layout/NavBar/Navbar";
import Footer from "./Layout/Footer/Footer";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Recipes from "./Pages/recipes/Recipes";
import SingleRecipe from "./Pages/singleRecipe/SingleRecipe";
import RecipeCategory from "./Pages/category/RecipeCategory";
import RecipeType from "./Pages/type/RecipeType";
import Diets from "./Pages/diets/Diets";
import Blog from "./Pages/blog/Blog";
import Contact from "./Pages/contact/Contact";
import PageNotFound from "./Pages/404/PageNotFound";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="diets" element={<Diets />} />
        <Route path="recipes">
          <Route path=":id" element={<SingleRecipe />} />
          <Route path="category/:category" element={<RecipeCategory />} />
          <Route path="type/:type" element={<RecipeType />} />
        </Route>
        <Route path="search" element={<Recipes />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ScrollToTop width="28" height="28" color="white" style={{borderRadius: "10px",backgroundColor: "#a8ba9a"}} smooth/>
      <Footer/>
    </>
  );
}

export default App;
