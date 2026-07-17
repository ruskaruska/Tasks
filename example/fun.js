//FUNCTION EXPRESSION ფუნქციის გამოსახულება

/*function sayHi() {
    console.log("Hello");
}

let sayHi = function() {
    console.log("Hello");
};*/
//Here we can see a variable sayHi getting a value,the new function,created as
//function(){
//console.log("Hello");
//}

//As the function creation happens in the context of the assignment expression
//(to the right side of = ),this is a Function Expression
//assignment-გამოსახულება

//Function is a value ფუნქცია როგორც მნიშვნელობა
function sayHi() {
    console.log("Hello");
}
console.log(sayHi);
//Let's reiterate:no matter how the function is created,a function is a value.Both
//examples above store a function in the sayHi variable.

//Callback functions
/*function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}*/

function showOK() {
    console.log("You agreed.");
}

function showCancel() {
    console.log("You canceled the execution.");
}

//usege:functions showOk, showCancel are passed as arguments to assk
//ask("Do you agree?", showOK, showCancel);

//The arguments: showOk and showCancel of ask: are called callback functions or just callbacks:

//The idea is that we pass a function and expect it to be "called back" later if necessary:
//In our case, showOk becomes the callback for "yes" answer,and showCancel for "no" answer:

/*function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}*/

/*ask(
    "Do you agree?",
    function() { console.log("You agreed."); },
    function() { console.log("You canceled the execution") }
)*/

//რატომ არის confirm() საჭირო ამ ფუნქციაში?
//confirm()არის ბრაუზერის ჩაშენებული ფუნქცია, რომელიც აჩვენებს პატარა ფანჯარას Yes/No(OK/Cancel)ღილაკებით;

//მაგალითად ასეთი ფანჯარა:
//"გსურთ ჩვენთან დარეგისტრირება?"
// OK / Cancel

//confirm() აბრუნებს:

// true - თუ დააჭირე OK-ს
// false - თუ დააჭირე Cancel-ს

/*
 რატომ უნდა გამოვიყენოთ confirm აქ?
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
*/
//(confirm(question))აკეთებს 2 რამეს:
//1.აჩვენებს კითხვის ფანჯარას (question)
//2.გვაძლევს პასუხს true  ან false

//თუ მომხმარებელი დააჭერს OK-მაშინ yes() ფუნქცია შესრულდება
//თუ დააჭერს Cancel-მაშინ no() ფუნქცია შესრულდება

//ანუ confirm() წყვეტს,რომელი ფუნქცია გამოიძახოს:
//მაგალითი:
/*ask(
    "გინდა შემოსვლა?",
    () => console.log("კეთილი იყოს შენი დაბრუნება!"),
    () => console.log("აბა, ნახვამდის!")
);*/
//თუ მომხმარებელი დააჭერს OK:
//გამოიძახება yes() და დაიწერება "კეთილი იყოს შენი დაბრუნება!"

//თუ დააჭერს Cancel:
//გაუშვებს no() ფუნქციას და დაწერს "ნახვამდის!"

//Callback function ამოცანები:
//Callback-ის იდეა:შენ არაფერს არ ბეჭდავ,არამედ callback-ს აძლევ შედეგს,რომ მან გააკეთოს რაც უნდა;
//ამოცანა 1:დაწერე ფუნქცია calculate(a, b, callback), რომელიც ორ რიცხვს იღებს და callback-ს გადასცემს შედეგს.

//1.შედეგის გამოთვლა (მაგ: a + b)
//2.და მერე ეს შედეგი callback-ს უნდა გადასცე;
//3.შევქმნათ ცვლადი result და a + b შედეგი შევინახოთ ამ ცვლადში
function calculate(a, b, callback) {
    const result = a + b; //1)გამოვთვალოთ
    callback(result); //2)გადავცეთ callback-ს
}

//4.მერე გამოვიძახოთ:
calculate(5, 3, function(res) {
    console.log("შედეგი არის:", res);
});

//ან Arrow function-ით:
calculate(5, 3, (res) => console.log(res));

/*ამოცანა 2
შექმენი ფუნქცია processName(name, callback), სადაც callback უნდა ამუშაოს მიღებული სახელი (მაგ: დიდი ასოებით, პატარა ასოებით და ა.შ.).*/
//callback-ის გარეშე
function greet(name) {
    console.log("გამარჯობა," + name);
}

greet("ანასტასია");

function processName(name, callback) {

}