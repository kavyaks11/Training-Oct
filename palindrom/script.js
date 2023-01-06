// let index = 0;
// function strPalindrom(str) {
//   let text = str.toUpperCase();
//   for (let i = 0; i <= text.length / 2; i++) {
//     if (text[index] === text[text.length - index - 1]) {
//       index++;
//     } else {
//       index = 0;
//     }
//   }
//   if (index > text.length / 2) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

// strPalindrom("abcddcba");

function numberPalindrom(number) {
  let num = number.split("");
  console.log(typeof num);
  console.log(num);

  for (let i = 0; i <= num.length / 2; i++) {
    if (num[0] === num[num.length - 1]) {
      console.log("palindrom");
      num[0] += 1;
    } else {
      console.log("Not a palindrom");
    }
  }
}
numberPalindrom("12344321");
