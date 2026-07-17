                  //CHATGPT- დან
//Function Declaration
function product(a, b){
  return a * b;
}
console.log(product(2, 3));

function number(d, c){
  console.log(d, c)
}
number(5, 6);

function sayHello(){
  console.log("Hello");
}
sayHello();
/*function-ფუნქციის შექმნის სიტყვაა
 sayHello-ფუნქციის სახელი
 ()-პარამეტრებისთვის
 {}-ფუნქციის კოდი
 sayHello();- გამოძახება
*/
//Function with Parameters
//ფუნქციას შეგვიძლია მონაცემები გადავცეთ
//name არის პარამეტრი
function greet(name){
  console.log("Hello" + name);
}
greet("Nika");

//Function with Return
//ზოგჯერ ფუნქციამ უნდა დააბრუნოს მნიშვნელობა
function sum(a, b){
  return a + b;
}

console.log(sum(5, 3));
//return აბრუნებს პასუხს

//Function Expression
//აქ ფუნქცია ინახება ცვლადში
let sayHi = function(){
  console.log("Hi");
};
sayHi();
//განსხვავება:ფუნქცია არის ცვლადის მნიშვნელობა


//Arrow Function(=>)
//ეს არის თანამედროვე და მოკლე ფორმა
const multiply = (a,b) =>{
  return a * b;
};
console.log(multiply(3,4));
 
const multiply1 = (a, b) => a * b;

console.log(multiply1(3, 4));

/*
 ეს არის Arrow Function(ისრიანი ფუნქცია)-იგივე ფუნქციაა,
 მოკლეთ ფორმით დაწერილი.
*/
//=> არის arrow function-ის სიმბოლო.
//(a, b) => {...}
//იგივეა რაც ჩვეულებრივი ფუნქცია:
function multiply2(a, b){
  return a * b;
}

//დავშალოთ ნაწილებად:
//const multiply1 = 
//ვქმნით ცვლადს multiply1,სადაც ფუნქციას ვინახავთ

// (a, b) ეს არის პარამეტრები (input-ები) ფუნქცია იღებს ორ რიცხვს.
// => ნიშნავს: "ეს არის ფუნქცია"

/*
 {
  return a * b;
 }
 ფუნქციის სხეული (body)
  აქ ვაკეთებთ გამოთვლას - a და b
*/

//ფუნქციის გამოძახება;
//console.log(multiply(3, 4));
//აქ ვიძახებთ ფუნქციას
//a = 3, b = 4
//ფუნქცია აკეთებს:
// 3 * 4 = 12  და გამოაქვს 12

//უფრო მოკლე ვარიანტი(important)
//const multiply1 = (a, b) => a * b;
//თუ ერთი ხაზი არის, {} და return აღარ არის საჭირო

/*
=> function-ის მოკლე ჩანაწერი
(a, b) = პარამეტრები
a * b = რასაც აბრუნებს 
multiply(3,4) = ფუნქციის გაშვება
*/

//Anonymous Function(უსახელო ფუნქცია)
//ფუნქციას სახელი არ აქვს
setTimeout(function (){
   console.log("Hello");
}, 1000);


 /*
 function (){
   console.log("Hello");
 }
 ეს არის უსახელო ფუნქცია,რადგან სახელი არ აქვს.
 setTimeout ნიშნავს:
 "გააკეთე რაღაც გარკვეული დროის შემდეგ"
 */

/*
setTimeout(function (){
   console.log("Hello");
}, 1000);
1.ვქმნი უსახელო ფუნქციას
2.ამ ფუნქციაში წერია:console.log("Hello")
3.1000 ნიშნავს 1000 მილიწამს(ანუ 1 წამს)
4. 1 წამში ეს ფუნქცია გაეშვება

ნაბიჯებად თუ მივყვებით:
ახლა არაფერი ხდება
გადის 1 წამი
შემდეგ იძახება ეს უსახელო ფუნქცია
კონსოლში იწერება "Hello"

რატომ ვიყენებთ უსახელო ფუნქციას აქ:
იმიტოტმ რომ:
ეს ფუნქცია ერთხელ გვჭირდება
და პირდაპირ ადგილზე ვწერთ
*/

//Immediately Invoked Function (IIFE)
//ფუნქცია რომელიც შექმნისთანავე გაეშვება
(function (){
  console.log("Hello");
})();
//ეს ფუნქცია მაშინვე მუშაობს

//Callback Function
//Callback არის ფუნქცია,რომელიც სხვა ფუნქციას პარამეტრად გადავცემთ,
//და ის ფუნქცია მას მოგვიანებით გამოიძახებს.
//ფუნქცია → იღებს სხვა ფუნქციას → შემდეგ იძახებს მას

//  მაგალითი
function greet(name, callback) {
  console.log("Hello " + name);
  //callback();
}

function sayBye() {
  console.log("Goodbye");
}

greet("Nika", sayBye);
/*
 1.greet ფუნქციას აქვს 2 პარამეტრი
   name
   callback
*/

/* 
sayBye ფუნქცია გადავეცით პარამეტრად
 greet("Nika", sayBye);
*/

/*
greet ფუნქცია შიგნით იძახებს
 callback();
*/

//Callback anonymous ფუნქციით
//callback ხშირად იწერება უსახელო ფუნქციით.