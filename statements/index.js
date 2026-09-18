/*1.
if(new Date().getHours() <18){
    alert("Good day!");
    document.getElementById("day").innerHTML = "Good day!";

}*/

//Date() არის JavaScrip-ის ჩაშენებული ობიექტი,რომელიც ინახავს მიმდინარე თარიღსა და დროს
//.getHours() აბრუნებს მიმდინარე საათს:
//მაგალითად: თუ დრო არის 08:30  მაშინ getHours() იქნება 8, ან დრო 10:15 მაშინ getHours() იქნება 10

//2.
/*let age = 18;
let text = "You can Not drive!";

if (age >= 17){
    alert("You can drive!")
    //text = "You can drive!";
}

document.getElementById("demo").innerHTML = text;*/

//3.
/*let age = 16;

if(age >=18){
    
}
console.log("You can Not drive!");


let age1 = 16;
let country = "USA";
let text = "You can Not drive!";

if(country == "USA"){
    if(age1 >= 16){
        console.log("You can drive!");
    }
}


function testNum(a){
    let result;
    if(a > 0){
      result = "positive";
    }else{
        result = "NOT positive";
    }
    return result;
}

console.log(testNum(6));


const age2 = 18;
if (age2 >= 18){
    console.log("You are an adult.");
}

//if..else Statement
const score = 40;
if (score >= 50){
    console.log("You passed.");
}else {
    console.log("You failed.");
}

//JavaScript nested-if statement
let i = 10;

if (i == 10){//First if statement
    if (i < 15){
        console.log("i is smaller than 15");

        if(i < 12){
           console.log("i is smaller than 12 too");

        }else{
            console.log("i is greater than 15");
        }
    }

}

//Using break in a  for loop
for (let i = 0; i < 10; i++){
    if (i === 5){
        console.log("Breaking the loop at", i);
        break;
    }
    console.log(i);
}

let num = 3;
if (num > 0){
    console.log(`${num } is positive number`)
}else{
    console.log(`${num} is a negative number`)
}

num = -3
if (num > 0){
    console.log(`${num} is a positive number`)
}else {
    console.log(`${num} is a negative number`)
}

let isRaining = true
if (isRaining){
    console.log('You need a rain coat')
}else{
    console.log('No need for a rain coat.')
}

isRaining = false
if(isRaining){
    console.log('You need a rain coat.')
}else {
    console.log('No  need for a rain coat.')
}



//decisions - გადაწყვეტილებები
let a = 0
if (a > 0){
    console.lo$g(`${a} is a positive number`)
}else if (a < 0){//სხვა შემთხვევაში, თუ
    console.log(`${a} is a negative number`)
}else if(a == 0){
    console.log(`${a} is zero`)
}else{
    console.log(`${a} is not a number`)
}

//If Else if Else
let weather = 'sunny'
if(weather === 'rainy'){
    console.log('You need a rain coat.')
}else if(weather === 'cloudy'){
    console.log('It might be cold, you need a jacket.')
}else if (weather === 'sunny'){
     console.log('Go out freely.')//თავისუფლად გადით გარეთ
}else{
   console.log('No need rain coat.')
}

//Switch - გადამრთველი
/*switch(caseValue){
    case 1:
      // code  
     break
    case 2:
      // code
     break
    case 3:
      //code
     break   
     default:
      //code         
}*/


/*let weather = 'cloudy' //weather[weTHer]
switch (weather){
  case  'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')  
    break
   case 'sunny':
     console.log('Go out freely.') 
     break
    default:
       console.log('No need for rain coat.')  
}*/

//Switch More Examples
/*let dayUserInput = prompt('What day is today?')
let day = dayUserInput.toLowerCase()

switch (day){
    case 'monday':
     console.log('Today is Monday')
     break
    case 'tuesday':
      console.log('Today is Tuesday')
      break       
    case 'wednesday':
       console.log('Today is Wednesday')
       break    
    case 'thursday':
       console.log('Today is Thursday')
       break
    case 'friday':
        console.log('Today is Friday')
       break
    case 'saturday':
        console.log('Today is Saturday')
        break 
    case 'sunday':
        console.log('Today is Sunday')
        break
        default:
         console.log('It is not a week day.')                
}*/

//Examples to use conditions in the cases
/*let num = prompt('Enter number');
switch (true){
    case num > 0:
      console.log('Number is positive');
      break;
    case num == 0:
      console.log('Number is zero'); 
      break;
    case num < 0:
      console.log('Number is negative');
      break;
      default:
         console.log('Entered value was not a number');
}*/
//Exercises: Level 1
//1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback-უკუკავშირი:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
//Enter your age: 30
//You are old enough to drive.

//Enter your age:15
//You are left with 3 years to drive.

/*let age = prompt('Enter your age:');
let  yearsLeft = 18 - age;

if(age >= 18){
    console.log('You are old enough to drive')
}else{
    console.log(`You are left with ${yearsLeft} years to drive`);
}*/

//Compare-შედარება
//Based on the comparison - შედარების საფუძველზე
//2.Compare the values of myAge and yourAge using if...else.Based on the comparison and log the result to console stating who is older (me or you)Use prompt('Enter your age:')to get the age as input

/*let myAge = 34;
let yourAge = prompt('Enter yor age:');

if(myAge > yourAge){
    console.log("I am older than you");
} else if(yourAge > myAge){
    console.log("You are older than me");
}else{
    console.log("We are the same age");
}*/

//greater-უფრო დიდი
//3. If a is greater than b return 'a is greater than b' else  'a is less than b'. Try to implement it in to ways

function compare(a, b){
 if(a > b){
    return "a is greater than b";
 }else{
    return "a is less than b";
 }
}

//ternary operator:
//javaScript-ში if...else-ის მოკლე ფორმაა
let a = 10;
let b = 8;  

let compare = a > b ? "a is greater than b": "a is less than b";
console.log(compare);