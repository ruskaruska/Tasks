//როცა ფუნქციას არგუმენტს არ გადასცემ.
/*function greetUser(name){
    console.log(name)

    
}
 greetUser();undefined იბეჭდება*/

//1.
 function greetUser(name){
    if(name){
        return(`Hello ${name}`);
    }
    else{
        return("Hello,stranger!")
    }
 }
  console.log(greetUser("John"));

/*ამიტომ `console.log(greetUser("John"))` სწორია. მთავარი ისაა, რომ ფუნქციის შიგნით `return` გამოიყენო, ხოლო შედეგის სანახავად გარედან `console.log()` გამოიძახო.*/

//2.
 function celsiusToFahrenheit(celsius){
     return celsius * 9 / 5 + 32;
}
console.log(celsiusToFahrenheit(4));
console.log(celsiusToFahrenheit(7));
console.log(celsiusToFahrenheit(25));
//თუ დავალებაში წერია „იღებს ტემპერატურას ცელსიუსებში“, ჩვეულებრივ იგულისხმება, რომ ფუნქციას უნდა ჰქონდეს ერთი პარამეტრი,celsius

//მსგავსი ამოცანები:
//1.შექმენი ფუნქცია metersToCentimeters,რომელიც იღებს სიგრძეს მეტრებში და აბრუნებს მას სანტიმეტრებში
function metersToCentimeters(meter){
    return meter * 100;
}
console.log(metersToCentimeters(4));

//3.შექმენი ფუნქცია squareNumber,რომელიც იღებს რიცხვს და აბრუნებს მის კვადრატს.
function squareNumber(num){
     return num * num;
}
console.log(squareNumber(25));

//4.შექმენი ფუნქცია doubleNumber,რომელიც იღებს რიცხვებს და აბრუნებს მის გაორმაგებულ მნიშვნელობას
function doubleNumber(num){
     return num * 2;
}
console.log(doubleNumber(8));

//5.შექმენი ფუნქცია minutesToSeconds,რომელიც იღებს წუთების რაოდენობას და 
//აბრუნებს წამების რაოდენობას
function minutesToSeconds(num){
    return num * 60;
}
console.log(minutesToSeconds(10));

//6.შექმენი ფუნქცია yearsToMonths,რომელიც იღებს წლების რაოდენობას და აბრუნებს თვეების რაოდენობას.

function yearsToMonths(year){
     return 12 * year;
}
console.log(yearsToMonths(4));

//7.შექმენი ფუნქცია daysToHours, რომელიც იღებს დღეების რაოდენობას და აბრუნებს საათების რაოდენობას.
function daysToHours(day){
    return day * 24
}
console.log(daysToHours(4));

//8.შექმენი ფუნქცია kilogramsToGrams, რომელიც იღებს კილოგრამების რაოდენობას და აბრუნებს გრამების რაოდენობას.
function kilogramsToGrams(kilogram){
    return kilogram * 1000;
}
console.log(kilogramsToGrams(6));

//9.შექმენი ფუნქცია ageInDays, რომელიც იღებს ასაკს წლებში და აბრუნებს დაახლოებით რამდენი დღეა ეს ასაკი
function ageInDays(age){
    return age * 365;
}

console.log(ageInDays(34));

//10.შექმენი ფუნქცია halfNumber, რომელიც იღებს რიცხვს და აბრუნებს მის ნახევარს
function halfNumber(num){
    return num / 2;
}
console.log(halfNumber(20));

//11.შექმენი ფუნქცია tripleNumber, რომელიც იღებს რიცხვს და აბრუნებს მის გასამმაგებულ მნიშვნელობას.
function tripleNumber(num){
   return num * 3;
}
console.log(tripleNumber(40));

//12.შექმენი ფუნქცია sumTwoNumbers, რომელიც იღებს ორ რიცხვს (a და b) და აბრუნებს მათ ჯამს.
function sumTwoNumbers(a, b){
    return a + b;
}
console.log(sumTwoNumbers (5,6));

//13.შექმენი ფუნქცია multiplyTwoNumbers,რომელიც იღებს ორ რიცხვს (a და b) და აბრუნებს მათ ნამრავლს.
 function multiplyTwoNumbers(a, b){
     return a * b; 
 }
 console.log(multiplyTwoNumbers(8,9));

//14.შექმენი ფუნქცია subtractTwoNumbers, რომელიც იღებს ორ რიცხვს (a და b) და აბრუნებს მათ სხვაობას (a - b).
function subtractTwoNumbers(a, b){
    return a - b;
}
console.log(subtractTwoNumbers(10,5));