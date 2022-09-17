import React from "react";
import BlogPost from "./BlogPost/BlogPost";
import Subscription from "./Subscription/Subscription";
import SmBlogPost from "./SmBlogPost/SmBlogPost";
import Blog1 from "../../Assets/Images/blog/Blog1.jpg"
import Blog2 from "../../Assets/Images/blog/Blog2.jpg"
import Blog3 from "../../Assets/Images/blog/Blog3.jpg"
import Blog4 from "../../Assets/Images/blog/Blog4.jpg"
import Blog5 from "../../Assets/Images/blog/Blog5.jpg"
import Blog6 from "../../Assets/Images/blog/Blog6.jpg"
import Blog7 from "../../Assets/Images/blog/Blog7.jpg"
import Blog8 from "../../Assets/Images/blog/Blog8.jpg"
import Blog9 from "../../Assets/Images/blog/Blog9.jpg"
import Sm1 from "../../Assets/Images/blog/Sm1.jpg"
import Sm2 from "../../Assets/Images/blog/Sm2.jpg"
import Sm3 from "../../Assets/Images/blog/Sm3.jpg"


const Blog = () => {
  return (
    <div style={{ maxWidth: "1100px" }} className="container blog my-5">
      <div className="container">
        <div className="row">
          <h2 className="secondary mb-4">
            Latest Posts <i className="fa-solid fa-utensils"></i>
          </h2>
          <SmBlogPost
            category={"travel"}
            img={Sm1}
            title={"The Travelers Guide for Foodies"}
          />
          <SmBlogPost
            category={"GardeNing"}
            img={Sm2}
            title={"Tips to Start Your Indoor Garden"}
          />
          <SmBlogPost
            category={"journal"}
            img={Sm3}
            title={"Budget Planning for Meal Prep"}
          />
        </div>
        <Subscription />
        <div className="row">
          <h2 className="secondary mb-4">
            Featured Posts{" "}
            <i
              style={{ color: "#875b8c" }}
              className="fa-solid fa-utensils"
            ></i>
          </h2>
          <BlogPost
            title={"How to Properly Cut and Prep Your Vegetables"}
            author={"Mike Jones"}
            likes={14}
            comments={26}
            date={"Jan 11, 2022"}
            img={Blog1}
          />
          <BlogPost
            title={"Travel to The Best Cuisine!"}
            author={"Noelle Single"}
            likes={10}
            comments={18}
            date={"Feb 09, 2022"}
            img={Blog2}
          />
          <BlogPost
            title={"Desserts, and Why They Are Necessary"}
            author={"Anderson Miller"}
            likes={34}
            comments={40}
            date={"Mar 18, 2022"}
            img={Blog3}
          />
          <BlogPost
            title={"Eating the Best Pre Workout Meal"}
            author={"Maya Smith"}
            likes={20}
            comments={6}
            date={"Apr 12, 2022"}
            img={Blog4}
          />
          <BlogPost
            title={"The Best Selling Cookbooks on the Market!"}
            author={"Mike Jones"}
            likes={35}
            comments={14}
            date={"May 11, 2022"}
            img={Blog5}
          />
          <BlogPost
            title={"Which Foods Help Your Hair Grow Healthy and Long?"}
            author={"Steve"}
            likes={14}
            comments={26}
            date={"June 7, 2022"}
            img={Blog6}
          />
          <BlogPost
            title={"Social Media and It's Affects On Your Mental Health"}
            author={"Anderson Miller"}
            likes={34}
            comments={40}
            date={"July 29, 2022"}
            img={Blog7}
          />
          <BlogPost
            title={"How to Pick The Right Pepper For Your Meal"}
            author={"Jerry"}
            likes={35}
            comments={46}
            date={"Aug 12, 2022"}
            img={Blog8}
          />
          <BlogPost
            title={"The Truth About Your Favorite Fruit"}
            author={"Noelle Single"}
            likes={14}
            comments={26}
            date={"Sept 20, 2022"}
            img={Blog9}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
