//ES6 fat arrow function
// let number = () => 10;
// console.log(number())
// const searchInput = document.querySelector(".search");
// const display = document.querySelector(".result");
// const thanks = document.querySelector(".thanks");

// function show(){
//   display.innerHTML = this.value;
//   var self = this;
//   setTimeout(function(){
//     thanks.innerHTML = `you have typed ${self.value}`;
//   },1000)
// };

// const showArrow = () => {
//   console.log(this)
//   display.innerHTML = this.value
//   setTimeout(() => (thanks.innerHTML = `you have typed: ${this.value}`),1000);
// };

//Arrow doesnt care about (this).
//use normal function for get outer (thi)s like an event, and to avoid confusion you can use arrow function on object to get the (this). because normal function changes the this, you can also do it by 
//var self = this; in  a normal function.


// searchInput.addEventListener("keyup", show);

//reduce
const numbers = [1,2,3,4,5,6,7];

const res = numbers.reduce((prevValue, currentValue, currentIndex, arr) => {
  return prevValue + currentValue;
}, 0)
console.log(res);