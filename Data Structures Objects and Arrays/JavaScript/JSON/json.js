let person = {
  name: 'John',
  surName: 'Johnas',
  age:30,
  children:{
    alexander:{      //კიდევ ერთი ობიექტი არის
        name:'Alexander',
        age: 5,
    },
    tinatini:{
       name:'Tinatin',
       age:11,
    }
    
  },
  interests:['tax eveasion','politics','education','sport','football'],
  married: true,
}

//console.log(person.age);//30

console.log(person.children);

person.friends = [
    {name:'Elchin',age: 34},
    {name: 'Lana', age: 30},
    {name: 'Sandra',age: 36, height:175},
];

console.log(person.friends);

//delete ოპერატორი;
console.log(person.friends.pop());//{ name: 'Sandra', age: 36, height: 175 }
console.log(delete person.friends[1].age);

console.log(person.interests.indexOf("sport"));

//JSON
//მაქვს person object-ი რომელსაც თავის სტრუქტურა აქვს და მინდა რომ სერვერს გავუგზავნო და ინფორმაცია სადღაც ჩავწეროთ  და ობიექტს ხომ ვერსად ვერ გავაგზავნით, იმიტომ ვერ გავაგზავნით რომ ობიექტი არის ჩემი კომპიუტერის მეხსიერებაში შენახული როგორც მნიშვნელობა და მე ამის გაგზავნა არსად არ შემიძლია. 

//შემიძლია გადავაქციო სტრინგად და JavaScript-ში ასეთ სტრინგს რომელსაც მნიშვნელობის გადაქცევა სტრინგად რომ შეგიძლია და თავის მნიშვნელობის სტრუქტურასაც რომ ინარჩუნებს ასეთ სტრინგს  JSON ქვია (JavaScript Object Notation).
JSON.stringify(person);//ტექსტად გადააქცევს
//JSON.stringify გვიბრუნებს ტექსტს, მე შემიძლია ეხლა გადავცე person და დამიბრუნებს სტრინგს ანუ ტექსტს დამიბრუნებს,რომელშიც person-ის სტრუქტურაა აღწერილი,და მე თუ მინდა 
//შემიძლია ეს string-ი გავაგზავნო სადაც მინდა
//ასევე შეიძლება მომივიდეს საიდანღაც,სერვერიდან მაგალითად და ამ სტრინგს ვერაფერს ვერ ვუზამ მისი დამუშავება ცემთვის ძაან ძნელი იქნება,მაგალითად თუ მომინდება name-ის ამოღება ვერ ამოვიღებთ ამისთვის JSON-ს აქვს JSON.parse


let text ='{"name":"John","surName":"Johnas","age":30,"children":{"alexander":{"name":"Alexander","age":5},"tinatini":{"name":"Tinatin","age":11}},"interests":["tax eveasion","politics","education","sport","football"],"married":true,"friends":[{"name":"Elchin","age":34},{"name":"Lana","age":30},{"name":"Sandra","age":36,"height":175}]}'
//და შემეძლება სტრინგი ისევ ობიექტად გადავაქციო:
let parsedPerson = JSON.parse(text);

const target = { a: 1, b: 2 };
//const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target);

console.log(returnedTarget);//{ a: 1, b: 2 }

//ობიექტის კოპირება
let newTarget = {...target};
console.log(newTarget);
//{...target}სამი წერტილი არის spred ოპერატორი,არის გაბნევის ოპერატორი აკეთებს იმას რომ target-ში რაც წერია აიღებს და გადმოაკოპირებს {...target} ამ ახალ ობიექტში და სინამვილეში ქმნის ახალ ობიექტს ამიტომ target და newTarget ერთი და იგივე აღარ გამოდის target == newTarget იქნება false

//მასივის შეერთება
let list1 = [1,2,3];

let list2 = [4, 5, "hello",true];

let listMerged = [...list1, ...list2];//აქ შემიძლია რამოდენიმე მასივი ერთმანეთში ჩავყარო და ერთი მასივი მივიღო
 
console.log(listMerged);
//[1,2,3] ამ მასივის ელემენტებს გააბნევს ჯერ ამ ...list1 ადგილას დასაწყისში, მერე ამ [4, 5, "hello",true]მასივის ელემენტებს გააბნევს ...list2 ამ ადგილას,გაბნევა ნიშნავს რომ ჩაყრის ჯერ ამ ელემნტებს მერე შემდეგი მასივის ელემენტებს ჩაყრის
//სამი წერტილი ანუ spred ოპერატორი ...list1 გვეუბნება იმას რომ ადექი ეხლა და გააბნიე list1-ში არსებული მნიშვნელობები ამ მასივში (ანუ ჩაყარე)
//ანუ საბოლოო ჯამში ვიღებთ იმას რომ ვაერთიანებთ  ამ მასივს [1,2,3] და [4, 5, "hello",true] და მასივს

//ფუნქციებში არის პირიქით
function sum(...natalia){
  console.log(natalia);
}
//როცა spred ოპერატორს ფუნქციის პარამეტრად ვიყენებთ მაშინ პირიქით არის ანუ აქ spred ოპერატორი შებრუნებული ოპერატორია პარამეტრებად: რაც მომივიდა პარამეტრად ის გადააქციოს მასივადო,ფუნქციის პარამეტრად თუ არის მაშინ ესე მუშაობს