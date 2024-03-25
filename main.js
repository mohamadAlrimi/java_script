document.write("hello");
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
let a = "Elzero Web School";
console.log(a.toUpperCase().charAt(2) + a.slice(3, 6)); //Zero
console.log(a.toUpperCase().substring(13, 14).repeat(8)); //HHHHHHHH
console.log(a.split(" ", 1));
console.log(a.substr(0, 7) + a.substr(length - 7)); // Elzero School
console.log(
  a.charAt(0).toLowerCase() +
    a.substring(1, a.length - 1).toUpperCase() +
    a.charAt(a.length - 1).toLowerCase()
); // eLZERO WBE SCHOOl
let price = 0;
console.log(` the price is ${price || 200}  `);
console.log(`the price is ${price ?? 200}`);
let s = 10;
s < 10
  ? console.log(10)
  : s >= 10 && s <= 40
  ? console.log("10 to 40")
  : s > 40
  ? console.log(" > 40")
  : console.log(unknown); //10 to 20
let st = "Elzero Web School";
if (st.length * 2 == 354) {
  console.log("good");
} else if (st.charAt(st.indexOf("W")).toLowerCase() === "m") {
  console.log("gooooood");
} else if (typeof st.length === "number1") {
  console.log("wrong");
} else if (st.substr(0, 6).repeat(2) === "ElzerElzero") {
  console.log("amazing");
} else if (typeof st.length !== "string") {
  console.log("wowww");
}
let jop = "Support";
let salary = 0;
switch (jop) {
  case "manager":
    salary = 8000;
    console.log(`the salary is ${salary}`);
    break;
  case "IT":
  case "Support":
    salary = 6000;
    console.log(`the salary is ${salary}`);
    break;
  case "Developer ":
    salary = 7000;
    console.log(`the salary is ${salary}`);
    break;
  default:
    console.log("no one");
}
let holoday = 2;
let money = 0;
if (holoday == 0) {
  money = 5000;
  console.log(`my money is${money}`);
} else if (holoday == 1 ||  holoday == 2) {
  money = 3000;
  console.log(`my money is ${money}`);
} else if (holoday == 3) {
  money = 2000;
  console.log(`my money is${money}`);
} else {
  console.log(`my money is finshed`);
}
