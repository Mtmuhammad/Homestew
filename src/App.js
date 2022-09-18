import "./Styles/base/_base.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Layout/NavBar/Navbar";
import Footer from "./Layout/Footer/Footer";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Recipes from "./Pages/recipes/Recipes";
import SingleRecipe from "./Pages/singleRecipe/SingleRecipe";
import Diets from "./Pages/diets/Diets";
import Blog from "./Pages/blog/Blog";
import Contact from "./Pages/contact/Contact";

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
        </Route>
        <Route path="search" element={<Recipes />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
