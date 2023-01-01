import * as model from "./model.js";
import recipeView from "./view/recipeView.js";
import searchView from "./view/searchView.js";
import resultsView from "./view/resultsView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

if (module.hot) {
  module.hot.accept();
}
// console.log(icons);

// const recipeContainer = document.querySelector(".recipe");

/////////////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = Number(window.location.hash.slice(1));

    // console.log(id);

    if (!id) return;

    recipeView.renderSpinner();
    //1)Loading recipe

    await model.loadRecipe(id);
    const { recipe } = model.state;

    //2) rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    // console.log(err);
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);
    // console.log(model.state.search.results);
    resultsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};
// controlSearchResults();

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
