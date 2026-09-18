//Example 1:

let age = 20;

if(age >= 18){
    console.log('Adult');
}else{
    console.log('Minor');
}

//ternary operator-ით ფორმულა:condition ? valueIfTrue : valueIffalse
//პირობა ? თუ TRUE : თუ FALSE
let age = 20;

age >= 18 ? console.log("Adult") : console.log("Minor");


//Example 2:
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
//ვამოწმებთ არის თუ არა 20 >= 18,რადგან true არის,მივიღებთ "Adult" და result გახდება: let result = "Adult"

//Example 3:
let age = 25;

if (age >= 18){
    result = "შეგიძლია";
}else {
    result = 'არ შეგიძლია';
}

//ternary:
let age = 25;

let result = age >= 18 ? "შეგიძლია": "არ შეგიძლია";

//Ternary Operator-ი კარგია მაშინ,როცა მხოლოდ ორი შემთხვევა გვაქვს:

//სავარჯიშო:
//let number = 7; თუ number არის 0-ზე 