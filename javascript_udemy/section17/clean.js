// const budget = Object.freeze([
//   { value: 250, description: "Sold old TV 📺", user: "jonas" },
//   { value: -45, description: "Groceries 🥑", user: "jonas" },
//   { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
//   { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
//   { value: -1100, description: "New iPhone 📱", user: "jonas" },
//   { value: -20, description: "Candy 🍭", user: "matilda" },
//   { value: -125, description: "Toys 🚂", user: "matilda" },
//   { value: -1800, description: "New Laptop 💻", user: "jonas" },
// ]);
// const spendingLimits = Object.freeze({
//   jonas: 1500,
//   matilda: 100,
// });
// spendingLimits.jay = 200;
//   const limit = spendingLimits[user] ? spendingLimits[user] : 0;
// const getLimit = (limits, user) => limits?.[user] ?? 0;

// const addExpenses = function (
//   state,
//   limits,
//   value,
//   description,
//   user = "jonas"
// ) {
  //   if (!user) user = "jonas";
//   const cleanUser = user.toLowerCase();

  //   let lim;
  //   if (spendingLimits[user]) {
  //     lim = spendingLimits[user];
  //   } else {
  //     lim = 0;
  //   } /

  //   const limit = getLimit(user);

//   return value <= getLimit(cleanUser)
//     ? [...state, { value: -value, description, user: cleanUser }]
//     : state;

  //   if (value <= getLimit(cleanUser)) {
  //     return [...state, { value: -value, description, user: cleanUser }];

  //     // budget.push({ value: -value, description, user: cleanUser });
  //   }
// };
// const newBudget1 = addExpenses(budget, spendingLimits, 10, "Pizza 🍕");

// const newBudget2 = addExpenses(
//   newBudget1,
//   spendingLimits,
//   100,
//   "movies 🍿",
//   "Matilda"
// );
// const newBudget3 = addExpenses(newBudget2, spendingLimits, 200, "Stuff", "Jay");
// console.log(newBudget1);
// console.log(newBudget2);
// console.log(newBudget3);
// console.log(budget);

// const checkExpenses2 = function (state, limits) {
//   return state.map((entry) => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: "limit" }
//       : entry;
//   });

//   // let lim;
//   // if (spendingLimits[entry.user]) {
//   //   lim = spendingLimits[entry.user];
//   // } else {
//   //   lim = 0;
//   // }
//   // const limit = spendingLimits?.[entry.user] ?? 0;
//   //   for (const entry of newBudget3)
//   //     if (entry.value < -getLimit(limits, entry.user)) {
//   //       entry.flag = "limit";
//   //     }
// };

// const checkExpenses = (state, limits) =>
//   state.map((entry) =>
//     entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: "limit" }
//       : entry
//   );

// const finalBudget = checkExpenses(newBudget3, spendingLimits);
// console.log(finalBudget);
// console.log(budget);

// const logBigExpenses = function (state, bigLimit) {
//   const bigExpenses = state
//     .filter((entry) => entry.value <= -bigLimit)
//     .map((entry) => entry.description.slice(-2))
//     .join(" / ");
  // .reduce((str, cur) => `${str},${cur.description.slice(-2)}`, "");
//   console.log(bigExpenses);

  //   let output = "";
  //   for (const entry of budget)
  //     output +=
  //       entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : "";
  //   // if (entry.value <= -bigLimit) {
  //   //   output += `${entry.description.slice(-2)} / `;
  //   // }
  //   //   output = output.slice(0, -2);
  //   console.log(output);
// };
// console.log(budget);
// logBigExpenses(finalBudget, 500);
