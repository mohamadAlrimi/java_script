// document.write("hello");
// var user ="muhammed";
// console.log(user);
// console.log(hello);
// let a="we love";
// let b="javascript";
// document.write(a+" "+b);
// console.log(a , b);
// let m ="ali";
// let n ="muhammed";
// let c="hani";
// let d="mahir";
// console.log(` ${m}      ${n}${c}${d}`);
// let a ="tital";
// let des="elzero web school";
// let mup =`
// <div class="parent">
// <div class="child">
// <h3>${a}</h3>
// <p>${des}</p>
// </div> </div>`;
// console.log(mup);
// document.write(mup);
// let a ="Elzero"
//  var b ="Elzero Web School";
// const s ="25 /10";
// let ma = `

// <div >
// <h3>${a}</h3>
// <p>${b}</p>
// <span>${s}</span>
// </div>

// `;
// let mb = `

// <div >
// <h3>${a}</h3>
// <p>${b}</p>
// <span>${s}</span>
// </div>

// `;
// let mc = `

// <div >
// <h3>${a}</h3>
// <p>${b}</p>
// <span>${s}</span>
// </div>

// `;
// let md = `

// <div >
// <h3>${a}</h3>
// <p>${b}</p>
// <span>${s}</span>
// </div>

// `;

// document.write(ma);
// document.write(mb);
// document.write(mc);
// document.write(md);
// let a = 10;
// let b ="20";
// let c = 80;
// console.log(++a + +b++  + +c++ - +a++);
// console.log(++a + -b  + +c++ - -a++ + +a);
// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d =2.4;
// console.log(Math.trunc(Math.min(a , b , c, d)));
// document.write(c);
// console.log(a**Math.trunc(d));
// console.log(Math.floor(d));
// console.log(Math.ceil(d));
// console.log(Math.trunc(d));
// console.log(parseInt(d));
// console.log((Math.floor(b) / Math.ceil(d)).toFixed(2));
// console.log(Math.ceil(Math.floor(b) / Math.ceil(d)));
// let a = "Elzero Web School";
// console.log(a.toUpperCase().charAt(2) + a.slice(3, 6)); //Zero
// console.log(a.toUpperCase().substring(13, 14).repeat(8)); //HHHHHHHH
// console.log(a.split(" ", 1));
// console.log(a.substr(0, 7) + a.substr(length - 7)); // Elzero School
// console.log(
//   a.charAt(0).toLowerCase() +
//     a.substring(1, a.length - 1).toUpperCase() +
//     a.charAt(a.length - 1).toLowerCase()
// ); // eLZERO WBE SCHOOl
// let price = 0;
// console.log(` the price is ${price || 200}  `);
// console.log(`the price is ${price ?? 200}`);
// let s = 10;
// s < 10
//   ? console.log(10)
//   : s >= 10 && s <= 40
//   ? console.log("10 to 40")
//   : s > 40
//   ? console.log(" > 40")
//   : console.log(unknown); //10 to 20
// let st = "Elzero Web School";
// if (st.length * 2 == 354) {
//   console.log("good");
// } else if (st.charAt(st.indexOf("W")).toLowerCase() === "m") {
//   console.log("gooooood");
// } else if (typeof st.length === "number1") {
//   console.log("wrong");
// } else if (st.substr(0, 6).repeat(2) === "ElzerElzero") {
//   console.log("amazing");
// } else if (typeof st.length !== "string") {
//   console.log("wowww");
// }
// let jop = "Support";
// let salary = 0;
// switch (jop) {
//   case "manager":
//     salary = 8000;
//     console.log(`the salary is ${salary}`);
//     break;
//   case "IT":
//   case "Support":
//     salary = 6000;
//     console.log(`the salary is ${salary}`);
//     break;
//   case "Developer ":
//     salary = 7000;
//     console.log(`the salary is ${salary}`);
//     break;
//   default:
//     console.log("no one");
// }
// let holoday = 2;
// let money = 0;
// if (holoday == 0) {
//   money = 5000;
//   console.log(`my money is${money}`);
// } else if (holoday == 1 ||  holoday == 2) {
//   money = 3000;
//   console.log(`my money is ${money}`);
// } else if (holoday == 3) {
//   money = 2000;
//   console.log(`my money is${money}`);
// } else {
//   console.log(`my money is finshed`);
// }
// let zero = 0;
// let cont = 3;
// let my = ["ahmed", "mazero", "elham", "osama", "jamal", "ameer"];
// console.log(my.reverse().slice(cont / cont , my.length  - 1));
// console.log(my.reverse().slice(my.length/cont));
// let first = my.shift(length / cont);
// let last = my.pop(length / cont);
// console.log(my );
// let first1 = my.shift(length - cont);
// console.log(my );
// let last2 = my.pop(  cont);
// console.log(my );
// console.log(my.slice(cont / cont , cont).reverse());
// console.log(`${my[cont / cont][5 ]}` );
// let products = ["keybord", "mouse", "pen", "pad", "monitor"];
// let color = ["red", "black", "green"];
// let showcount = 4;
// document.write(`<h3>Show ${showcount} products</h3>`);
// for (let i = 0; i < showcount; i++) {
//   document.write(`<div>`);
//   document.write(`<h3>[${i + 1} ${products[i]}]</h3>`);
//   for (let j = 0; j < color.length; j++) {
//     document.write(`<p>${color[j]}</p>`);
//   }
//   document.write(`${color.join("|")}`);
//   document.write(`</div>`);

// mainloop: for (let j = 0; j < products.length; j++) {
//   if (typeof products[j] === "number") continue;
//   console.log(products[j]);
//   nestedloop: for (let i = 0; i < color.length; i++) {
//     console.log(`-${color[i]}`);
//   }
// }
// function sayHello(useName, Age) {
//   if (Age < 18) {
//     console.log("App is not sitabul for you");
//   } else {
//     console.log(`hello ${useName} your age is ${Age}`);
//   }
// }
// sayHello("muhammed", 34);
// sayHello("ali", 14);
// sayHello("hani", 18);
// function sayHello(useName, Age) {
//   if (Age === "undefined") Age = Unknown;
//   return `Hello ${useName} your age is ${Age}`;
// }
// console.log(sayHello("ali" ,50));
// function calc(...numbers){
//   // console.log(Array.isArray(numbers));
//   let result = 0;
//   for(let i=0;i <numbers.length;i++){
//     result+=numbers[i];
//   }
//   return`Final result is ${result}`
// }
// console.log(calc(1,4,3,5,5,6,8,43,2,7,56,34,328,789,0));
// function shoInfo(ur = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
//   document.write(`<div>`);
//   document.write(`<h2>Hello:${ur}</h2>`);
//   document.write(`<p>Age:${ag}</p>`);
//   document.write(`<p>HourRate:$${rt}</p>`);
//   if (show === "Yes") {
//     if (sk.length > 0) {
//       document.write(`<p>Skills:${sk.join("|")}</p>`);
//     } else document.write(`<p>Skills:no skills</p>`);
//   } else {
//     document.write(`<p>skills is hidden</p>`);
//   }
//   document.write(`</div>`);
// }
// shoInfo("muhammed", 24, 20, "2", "html", "css");
// let i = 0;

// function showDetails(a, b, c) {
//   let ar = [a, b, c];
//   for (; i < 3; i++) {
//     if (typeof ar[i] === "string") {
//       first = ar[i];
//       // document.write(`:${ar[i]}`);
//     } else if (typeof ar[i] === "number")
//     // document.write(`age:${ar[i]}`);
//     second = ar[i];
//     else if (typeof ar[i] === "boolean") {
//       if (ar[i] === true) {
//         // document.write("yes");
//         third = "averable";
//       } else
//       third="not avarable";
//       // document.write("no");
//     }
//   }
// }

// showDetails("ali", 24, true);
// // showDetails("muhammed\n", false, 45);
// document.write(` Hello:${first}  your  age is ${second}  ${third}`);
// function calc( number1 ,number2){
//   return number1 + number2 ;
// }
// console.log(calc(12 , 34 ));
let calcoletr = function (number1, number2) { 
  return number1 + number2;
};
console.log(calcoletr(12, 55));
document.getElementById("Show").onclick = function () {
  console.log("show");
};
