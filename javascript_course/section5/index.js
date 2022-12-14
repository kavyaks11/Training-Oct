'use strict';

/*const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

// temperature amplitude
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude([3, 5, 1], [9, 0, 5]);
console.log(amplitude); */

/*const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    value: Number(prompt('Degrees celsius:')),
  };

  console.table(measurement);
  //   console.log(measurement);
  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin()); */

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 1, 5]);
// console.log(amplitudeBug);

// coding challenge

/*let string = '...';
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    // console.log(`"...${arr[i]}°C in ${i + 1} days..."`);
    string += `${arr[i]}°C in ${i + 1} days...`;
  }
};
// printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
console.log(string);*/

const data1 = [17, 12, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days...`;
  }
  console.log('...' + str);
};
printForecast(data1);
