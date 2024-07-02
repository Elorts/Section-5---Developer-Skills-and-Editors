// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// if (x === `3`) console.log(`kuku`);

// function bybys() {
//   return null;
// }

// const calcAge = (birthYear) => 2024 - birthYear;

// console.log(calcAge(1990));

// console.log(calcAge);

// const mKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degree celsius:')),
//   };

//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(mKelvin());

const testDataArr1 = [17, 21, 23];
const testDataArr2 = [12, 5, -5, 0, 4];

let fullString = '... ';

const printForcast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    fullString += arr[i] + `°C in ${i + 1} days ... `;
  }
  return fullString;
};

console.log(printForcast(testDataArr2));
