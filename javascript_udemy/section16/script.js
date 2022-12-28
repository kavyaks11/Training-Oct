"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

////////////////////////////////////////////
const renderCountry = function (data, className = "") {
  const languages = Object.values(data.languages);
  const currencies = Object.values(data.currencies);

  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
     <h3 class="country_name">${data.name.common}</h3>
     <h4 class="country__region">${data.region}</h4>
     <p class="country__row"><span>👫 </span>${(
       +data.population / 1000000
     ).toFixed(1)} people</p>
     <p class="country__row"><span>🗣️ </span>${languages[0]}</p>
     <p class="country__row"><span>💰 </span>${currencies[0].name}</p>    
       
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};
const getCountryAndNeighbour = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  //   console.log(request.responseText);

  request.addEventListener("load", function () {
    // console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //render country 1
    renderCountry(data);

    //Get neighbour country
    const [neighbour] = data.borders;

    if (!neighbour) return;

    //AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      //   console.log(this.responseText);
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, "neighbour");
    });
  });
};
// getCountryAndNeighbour("portugal");
getCountryAndNeighbour("usa");

setTimeout(() => {
  console.log("1 second passed");
  setTimeout(() => {
    console.log("2 seconds passed");
    setTimeout(() => {
      console.log("3 seconds passed");
      setTimeout(() => {
        console.log("4 seconds passed");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// getCountryData("portugal");
// getCountryData("australia");
// getCountryData("india");
// getCountryData("usa");
