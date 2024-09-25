
const ourString = "aBcdefg";

const pattern = /bc/i;

const matched = ourString.match(pattern);

console.log(matched);
const tested = pattern.test(ourString);
console.log(tested);

const pattern2 = new RegExp("bc");
const tested2 = pattern2.test(ourString)
console.log(pattern2);