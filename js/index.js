// const b = 2;
// // let c;

// let c = false;

// let arr = [
//   1,
//   33,
//   5,
//   6,
//   8,
//   22,
//   6,
//   9,
//   "helll",
//   false,
//   [1, 3, 4, 5],
//   { name: "hello" },
// ];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let obj = {
//   name: "jhon",
//   age: 22,
//   myArr: [1234, 4, 5, 7],
//   myFun: add(23, 23),
// };

// console.log(obj.name);

// function add(fun(), bbbb = 8) {
//   return aaa + bbbb;
// }

// console.log(b);

// const add = () => aaa + bbbb;

// add();

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.push(10);
// arr.pop();
// arr.shift();
const newArr = arr.slice(2, 5);

console.log(newArr);
console.log(arr);

// const obj = {
//   name: "jhon",
//   age: 22,
// };

const data = [
  {
    name: "jhon",
    age: 22,
  },
  {
    name: "doe",
    age: 33,
  },
  {
    name: "doe",
    age: 33,
  },
  {
    name: "doe",
    age: 33,
  },
];

data.map((item, index) => {
  console.log(index + " : " + item.name);
  console.log(index + " : " + item.age);
});
