import { async } from "regenerator-runtime";
import { API_URL } from "./config.js";
import { getJSON } from "./view/helpers.js";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
  },
};
export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}get?rId=${id}`);
    // const res = await fetch(
    //   `https://forkify-api.herokuapp.com/api/get?rId=${id}`
    //   //   `https://forkify-api.herokuapp.com/api/get?rId=47161`
    // );

    // console.log(res, data);

    const { recipe } = data; //since data contains underscore , destructuring the data,

    state.recipe = {
      id: recipe.recipe_id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (err) {
    console.error(`${err}`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}search?q=${query}`);
    console.log(data);

    state.search.results = data.recipes.map((rec) => {
      return {
        id: rec.recipe_id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
   
  } catch (err) {
    console.error(`${err}`);
    throw err;
  }
};
// loadSearchResults("pizza");
