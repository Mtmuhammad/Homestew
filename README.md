# React Recipe App

Homestew

An application used to filter recipe and nutrition data from the Spoonacular API, built with React, JavaScript, and Sass.

[![My Skills](https://skills.thijs.gg/icons?i=react,js,html,scss,git)](https://skills.thijs.gg)

## Project Status

This project is currently in development. Users can research various diets, search recipes by recipe type or cuisine, and view single recipes. Single recipe pages include
ingredients and instructions for the recipe, as well as wine recommendations. Blog pages, functionality to sort by additional parameters and allow users to save recipes with authentication
in progress.

## Project Screen Shot(s)

### Homepage

![Homestew homepage](https://user-images.githubusercontent.com/97124404/190714244-beaea666-1752-4331-bbb4-cdf19445f144.png)

### Diets Page

![Homestew Diets](https://user-images.githubusercontent.com/97124404/190715423-4cbac494-5a20-485a-b6d1-002ee255c381.png)

### Recipe Search Page

![Homestew Search](https://user-images.githubusercontent.com/97124404/190714713-f8479a5a-1869-4aa5-8ea8-4b8730e90881.png)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  

## Reflection
  
This project was initially built as a capstone project coded with Python flask and jinja templates. I wanted to re-make the project and challenge
myself to learn a new front end library for future usage on various projects. Project goals included using technologies learned up until this point
and familiarizing myself with React documentation.  Originally, my aim was to create authorization and authentication to allow users to save recipe information.
One of the issues I ran into was the limited amount of requests I was able to make to the API daily. This hindered much of the
development process, especially when needing to run tests and implementing many of the planned features would have been time consuming. The
technologies used in this project are React, React-Router 6.3, JSX, and SCSS. I chose to use the `create-react-app` boilerplate to minimize initial
setup and invest more time learning React Router and React Hooks. In future commits, I plan on implementing login and sign-up authorization and
authentication, blog page functionality for users to document their cooking experiences, and the ability to comment on users submitted blogs and
recipes.
