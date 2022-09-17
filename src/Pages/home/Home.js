import React from "react";
import Header from "../../Layout/Header/Header";
import IconBar from "./IconBar/IconBar";
import LatestPosts from "./LatestPosts/LatestPosts";
import Cuisines from "./Cuisines/Cuisines";


const Home = () => {

  return (
    <div data-testid="home">
      <Header />
      <LatestPosts/>
      <IconBar/>
      <Cuisines cuisine="Spanish" iconColor="#875b8c"/>
      <Cuisines cuisine="Caribbean" iconColor="#008080"/>
      <Cuisines cuisine="Italian" iconColor="#a8ba9a"/>
      <Cuisines cuisine="Indian" iconColor="#875b8c"/>
      <Cuisines cuisine="Chinese" iconColor="#008080"/>
      <Cuisines cuisine="American" iconColor="#a8ba9a"/>
      
    </div>
  );
};

export default Home;
