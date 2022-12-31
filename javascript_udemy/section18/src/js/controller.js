import * as model from "./model.js";
import recipeView from "./view/recipeView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";
// console.log(icons);

const recipeContainer = document.querySelector(".recipe");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(
        new Error(`Request  took too long!
            Timeout after ${s} second`)
      );
    }, s * 1000);
  });
};

/////////////////////////////////////////////

console.log("hello world");

const controlRecipes = async function () {
  try {
    const id = Number(window.location.hash.slice(1));
    // id = 47161;
    console.log(window.location.hash);
    console.log(id);

    if (!id) return;

    recipeView.renderSpinner();
    //1)Loading recipe

    await model.loadRecipe(id);
    const { recipe } = model.state;

    //2) rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};
controlRecipes();

["hashchange", "load"].forEach((ev) =>
  window.addEventListener(ev, controlRecipes)
);

// window.addEventListener("hashchange", showRecipe);
// window.addEventListener("load", showRecipe);
