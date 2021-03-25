import React from "react";
import StyleConfig from "./src/constants/StyleConfig";
import RecipeNavigator from "./src/navigator/RecipeNavigator";

const App = () => {
  // console.log((StyleConfig.width * 20) / 100);
  // console.log(StyleConfig.height);
  // console.log((66 / 812) * 100);
  // console.log((209 / 375) * 100);
  return <RecipeNavigator />;
};

export default App;
