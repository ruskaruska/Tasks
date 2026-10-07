//Data Structures:

//ყველაფერი დავაკავშიროთ ნოლებსა და ერთების სამყაროს:

//Array:არის ინფორმაციული სტრუქტურა
//ვთქვათ რაღაც რიცხვები შევინახე ;[9,8,10,10,5,8] და ჯავასკრიპტისთვის ეს არის მნიშვნელობა და მნიშვნელობა რა არის, მეხსიერებაში გამოყოფილი ადგილი სადაც წერია ის რაც მიეცი პროგრამულ გარემოს
//მაგალითად რო დავწეროთ უბრალოდ მხოლოდ 17 ან false ესენიც მნიშვნელობები არიან

//მანიპულაცია შეგვიძლია მოვახდინოთ:
let list = [9,8,10,10,5,8];
console.log(list[2]);

let listOfNumbers = [2,3,5,7,11];
console.log(listOfNumbers[2]);//5

console.log(listOfNumbers[0]);//0

console.log(listOfNumbers[2 - 1]);//3


let xy = [[1,7,9], [6,0,3]];

console.log(xy[0][2]);


//Properties  OBJECTS
//და რა არის Propertie-ები,მაგალითად როცა ვწერთ console.log-ს, console-ობიექტი არსებობს ჯავასკრიპტში და მას შიგნით აქვს უამრავი Propertie-ები,და ეს ფროფერთები შეიძლება იყოს სტრინგი,ნამბერი,შეიძლება იყოს ფუნქცია, და ამ შემთხვევაში console.log("Hello")ფუნქციაა რომელიც console-ში რაღაცას ბეჭდავს,და ზუსტად ასე მეც შემიძლია მონაცემთა სტრუქტურა მქონდეს რომელშიც რაღაცეები შემიძლია ამოვბეჭდო,იმისათვის რომ კონკრეტული ობიექტის კონკრეტულ ფროფერთის მივწვდე,უნდა გამოვიყენო წერტილი და ამ ფროფერთის დასახელება უნდა ვიცოდე, მასივში ხომ და-index-ებულია ყველაფერი და Object-ების შემთხვევაში როცა Propertie-ები გაქვს დასახელებული და მაგიტომ ქვია Propertie-ები 

/*let text = "Hello World!";
console.log(text.length);//12*/

/*let text ="Hello World!";
console.log(text.toUpperCase());//HELLO WORLD!*/

/*let text = "Hello World!";
console.log(text.toLocaleLowerCase());//hello world!*/

//მასივში ჩამატება: push() მასივის ბოლოში ამატებს მნიშვნელობებს
//push() მეთოდია, ფუნქციაა რომელიც რომელიც შენახულია push()ფროფერთიზე,push()ფროფერთია მიმთითებელი ამ მნიშვნელობაზე
let sequence = [1,2,3];
sequence.push(4);
sequence.push(5);
console.log(sequence);

//pop()ფუნქცია მასივის ბოლოდან აკლებს მნიშვნელობებს 
console.log(sequence.pop());//5 

console.log(sequence);

//Objects
//ობიექტები არის მონაცემთა სტრუქტურა ჯავასკრიპტში რომელიც იქმნება ფიგურული ფრჩხლებით

//შიგნით მონაცემები მე შემიძლია ავღწერო სახელებად(propert)-ები ქვია ამას,
//მონაცემთა სანახია სადაც მე შემიძლია ამ მონაცემებს დავარქვა სახელები და ეს სახელები არის property-ები

let day1 = {
    squirrel: false,
    events:["work","touched tree","pizza","running"],
    //მე აქ შემიძლია სხვა რაღაცეებიც ჩავწერო:
    dayCount: 1,
    weather: "Sun",
};
//day1-ამ ობიექტის property-ის მივწვდე
console.log(day1.events);//[ 'work', 'touched tree', 'pizza', 'running' ]
console.log(day1.weather);//Sun

//day.age, undefined გამოვა

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

/*let interests = person.interests;
 console.log(interests);*/
 
//console.log(person.interests == interests);

//console.log(person.interests);

//გადაწერა:
let interests = person.interests
console.log(interests[2]="Business");

console.log(interests);//[ 'tax eveasion', 'politics', 'Business', 'sport', 'football' ] გადაეწერა 'Business'
//კიდევ გადავაწეროთ 'sport'-ი tech-education-ით
console.log(interests[3]='tech-education');
console.log(person);
//რომ გავიგო რომელ ადგილზე:მაგალითად 'politics'-ი,ჯერ შევინახოთ indexOfPolitics-ში
let indexOfPolitics = person.interests.indexOf("politics");
console.log(indexOfPolitics);//1 ინდექსე
//ინდექსი ხომ ვიპოვეთ და შევინახეთ სადღაც მნიშვნელობად,ეხლა გამოვიყენოთ ეს შენახული რომ ამოვიღოთ
//[indexOfPolitics]ცვლადად ჩავწერეთ
console.log(person.interests[indexOfPolitics]);//politics
//ეხლა მაინტერესებს politics-ს მერე რა უწერია
console.log(person.interests[indexOfPolitics + 1]);//Business
//ახსნა:
/*რატომ ჩაანაცვლა 'Business'-მა 'education'-ი ან 'sport'-ი 'tech-education-მა?
სინამდვილეში person.interests ხომ სადღაც არის შენახული,სადღაც მისამართზე არის შენახული,ეს interests არის ბაიდინგი ცვლადი, და ცვლადი რა არის? ბმა არის მისამართი არის შენახული სადაც წერია ეს ინფორმაცია მეხსიერებაში.
let interests = person.interests ეს რომ დავწერეთ, ჩვენ ვთქვით რომ ეხლა ვქმნით ახალ ბაიდინგს interests ახალ ცვლადს ვქმნი,რომლის ბაიდინგიც იგივეა რაც  person.interests რომ არის აი ამის ბაიდინგი
*/

//in OPERATOR
//ვთაქვათ მაქვს რაღაც person object-ი და მაინტერესებს ამ person არის თუ არა property age-ი
console.log("age" in person);//true
console.log("bike" in person);//false


//Object.values() ეს დასერჩვა

//ასევე შეგვიძლია Object.assign- ის გაკეთება
/*let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);//{ a: 1, b: 3, c: 4 }*/
//მაქვს ობიექტი objectA რომელშიც a ფროფერთიში წერია 1, b ფროფერთიში წერია 2 და მინდა ახალი ინფორმაცია ჩავამატო სადაც b-ში 3 ჩავწერ  და c: 4 ჩავამატებ
//მე შემიძლია ახალი ობიექტი შევქმნა და Object.assign მეთოდი გამოვიყენო,სადაც პირველ objectA ობიექტს გადავცემ პირველ პარამეტრად და რომელიც მინდა რომ ზემოდან დავამატო ანუ ერთმანეთში შევაერთო გადავცემ მეორე{b: 3, c: 4}პარამეტრად


//MUTABILITY

//რომ დავწეროთ:
//20;//ამ მნიშვნელობას ვეღარასდროს ვეღარ შევცვლი

/*let number = 20;

number = 25*/;//წარმოდგენაში შევცვალეთ რომ number 25-ია,მაგრამ სიანმდვილეში ეს 20 არ შეგვიცვლია,20 ისევ იმ ადგილას არის სადაც იყო უბრალოდ ახალი მნიშვნელობა შეიქმნა 25,ახალ ადგილას ჩაიწერა და number-ს შეეცვალა მისამართი და 20-ს კიარ უყურებს, 25-ს უყურებს,
//ყველა ატომური basec მნიშვნელობის ტიპი ესეა ჯავასკრიპტში რომ immutable არის, by defoult არის immutable

//ობიექტი არის ასეთი რამ რომ ობიექტის property-ების Mutability მოსულა

/*let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);//true

console.log(object1 == object3);//false*/

//object3 და object1 თითქოს ერთიდაიგივეა ამათი ტოლობა true-ს უნდა გვაძლევდეს, მაგრამ გვაძლევს false,იმიტომ რომ სხვადასხვა მნიშვნელობებია სხვადასხვა ადგილებზეა,
//let object1 = {value: 10}აქაც მნიშვნელობა 10წერია 
//let object3 = {value: 10}; აქაც მნიშვნელობა 10წერია
//მაგრამ მნიშვნელობა არ აქვს ორივე ჯერზე ახალი შეიქმნა,ახალი უჯრა დაიკავა და იმ უჯრებს უყურებს, ერთიც სხვა უჯრა და მეორეც სხვა უჯრაა,
//მაგრამ object1 და object2 რომ შეადარეს ერთი და იგივე აღმოჩნდა,object1-ის მისამართი, აი let object2 = object1 ამ დროს იგივე მისამართი ჩაწერა object2-იც და ორივე უჯრა რომ შეადარა ერთმანეთს თქვა რომ კი ერთიდაიგივეაო,იმის მიუხედავად რომ ერთ უჯრაზე ორი სხვადასხვა ბაიდინგია და ერთი და იგივე რაღაცას უყურებს,მაგრამ რომ ვადარებთ ერთმანეთს ამ ბაიდინგებს მივა შეხედავს მივა შეხედავს,ერთი და იგივე რაღაცას ვუყურებთ თუ არაო


//let, const განსხვავება

/*let number1 = 10;

number1 = 25;*/

//console.log(number1);//25 შედეგი, let-ის შემთხვევაში მნიშვნელობის შეცვალა შეიძლება ანუ საცეცის ერთი უჯრიდან მეორე უჯრაზე გადატანა შეიძლება

/*const number2 = 15;

number2 = 20;

console.log(number2)*/;//Assignment to constant variable
//const არის ისეთი ცვლადი, რომლის მიმთითებლის სხვა უჯრაზე გადატანა არ მოსულა

//მაგრამ:
/*const person = {
    name: "Janeth",
    age: 19,
}*/

//შევუცვალოთ ასაკი:
//console.log(person.age(30));//შედეგი 30
//სინამდვილეში ობიექტები,ობიექტების ფროფერთები არიან ცალკე ბაინდინგები,რომელიც ჯავასკრიპტში ისე აღმოჩნდნენ რომ არ არიან Immutable


//Array LOOPS
//დავალება არის რომ ეს ყველა ინტერესი ცალ-ცალკე ხაზებად ამოვბეჭდოთ
person.interests = ["tech","education","sport","iceskating"];
//for LOOP-ით შეგვიძლაი გავირბინოთ შიგნით:
//იწყება 0-დან  და მუშაობს მანამ სანამ i-ინდექსი არ გადაცდება length-ს,length ნაკლები სანამ იქნება მანამ იმუშავებს
/*for(let i = 0; i < person.interests.length; i++){
    
    console.log(person.interests[i]);//გამობეჭდავს ყველას
}*/

//სხვანაირადაც შეგვიძლია ჩავწეროთ:
for (let interests of person.interests){
      console.log(interests);
}
//აქ უკვე ყოველ ჯერზე let interests ეს ინტერესი იქნება ამოღებული რეალური ველიუ ამოღებული  ამ person.interests ინტერეს მასივიდან
/*ესეთი მასივია რომელიც  of ოპერატორით ყველაში თავისით გარბის,რამხელაც არის მასივი იმდენჯერ გაირბენს ციკლში და რამდენჯერაც შიგნით ვველიუ შეხვდება interests-ში იმდენჯერ აი interests ამ ცვლადში ჩაწერს იმ ერთ ველიუს,  ანუ თავზე გადააწერს*/

console.log(person.interests.length);//4
console .log(person.interests);//[ 'tech', 'education', 'sport', 'iceskating' ] 3-ია

//FURTHER ARRAYOLOGY
/*მასივის ბოლოში push() ამატებდა და pop()აგდებდა,რომ წარმოვიდგინოთ იარაღის მჭიდი მჭიდში ტყვიებს რომ ვამატებთ და ბოლოს რომელიც დავამატეთ ამოღება რომ გვინდა პირველი ის უნდა ამოვიღოთ  და ბოლოს ამოვიღებთ იმას რომელიც პირველი დავამატეთ, ამ პრინციპით მუშაობს push() და pop()*/

//თავში რომ დავამატო და თავიდან ამოვიღო ამისთვის არსებობს unshift და shift

//იმახსოვრებს თასკებს
let todoList = [];
function remember(task){
    todoList.push(task);
}
function getTask(){
    return todoList.shift();
}

function rememberUrgently(task){
    todoList.unshift(task);
}

remember("Meetup - Tech Shabati");//task-დავამატოთ
remember("Dudus Lecture")//'Dudus Lecture' 
remember("NucubidZe 4");
console.log(todoList)//todoList ხომ ცარიელია push-ს და ჩაემატება აქ "Meetup - Tech Shabati" ეს

todoList.shift();//დასაწყისიდან აგდებს

console.log(todoList);//[ 'Dudus Lecture', 'NucubidZe 4' ]

todoList.unshift("Networking Session");//დასაწყისში ჩაამატებს

console.log(todoList);//[ 'Networking Session', 'Dudus Lecture', 'NucubidZe 4' ]

//slice() არის ისეთი ფუნქცია რომელიც უთითებ საწყის და საბოლოო ინდექს და იმ ნაწილს ამოჭრის
//გვაქვს მასივი:
let number = [0,1,2,3,4];
console.log(number.slice(1, 3));//[ 1, 2 ]
//და რატომ ამოიღებს [ 1, 2 ] ამას? იმიტომ რომ slice(1, 3) პირველი არგუმენტი რაც უწერია ეს არის ინქლიზივ ანუ პირველი არგუმენტი შედის 1-იანი რომ უწერია, ბოლო რაც უწერია ეს ექსქლუზივია არ შედის ანუ მეორე 3-იანი რომ წერია ის არ შედის,ამიტომ 3-იანიც რომ ამოვიღო მეორე 4-იანი უნდა ჩავწერო (1, 4)
console.log(number.slice(1, 4));//[ 1, 2, 3 ]

//ორი მასივის კონკატენაცია:
let number2 = [5, 6, 7, 8];

console.log(number.concat(number2));

console.log(number.slice(2, 4).concat(number.slice(1, 3)));
//ორი ნაჭერი ამივიღეთ სხვადასხვა მასივებიდან და შევაწებეთ

let kim = 'Kim';

console.log(kim.length);

//kim ბაინდინგში მიბაინდიგებულია სტრინგი 'Kim', kim.length - kim ბაიდინგს მიწვდი და რა სტრინგიც არის მიბაინდიგებული ანუ 'Kim' length-ის მეშვეობით დაითვალე სიმბოლოების რაოდენობა

console.log(kim.age = 33);

console.log(kim);

//built-in properties - ჩაშენებული თვისებები

//slice შესაძლებელია გამოიყენო string-ზე, ასევე indexOf-იც შესაძლებელია გამოიყენო ანუ გამოდის რომ string-ი ქერექთერების  სერიაა
console.log("Hello World"[1]);//e
console.log("Hello World"[0]);//H
console.log("Hello World"[5]);//ამობეჭდავს ცარიელ სტრინგს


//trim აჭრი სფეისს
console.log("Hello World  ");//'Hello World  '
console.log("Hello World  ".trim());//'Hello World' მოაჭრის სფეისს



//repeat
console.log("Hello World".repeat(4));//Hello WorldHello WorldHello WorldHello World

//split-გაყოფა
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);//[ 'Secretarybirds', 'specialize', 'in', 'stomping' ]დააცალკევებს ცალ-ცალკე სტრინგებათ
console.log(words.join(" "));//Secretarybirds.  specialize.  in.  stomping  შეაერთებს


//Math ობიექტი;

console.log(Math.random());//0.3208062594739751რანდომულად დაბეჭდავს რიცხვებს

console.log(Math.max(9, 7, 199));//199 ყველაზე მაქსიმალურ რიცხვს დაბეჭდავს
 
console.log(Math.min(9, 7, 199));

console.log(Math.floor(7.5))//7 დაამრგვალებს ქვემოთ

console.log(Math.ceil(7.5))//8 დაამრგვალებს ზემოთ 


//DESTRUCTURING-დესტრუქტურიზაცია
//რა არის დესტრუქტურიზაცია: მაგალითად მინდა რომ person მასივიდან მინდა ამოვიღო age თან ეს ინფორმაცია ისე ამოვიღო რომ ცვლადად ვაქციო:
let {age} = person;//ეს ადგება და ავტომატურად ამოიღებს person-დან age-ს შექმნის age ბაინდინგს და მიანიჭებს ამ ბაინდინგს მნიშვნელობას ანუ 30-ს
// ანუ ცვლადი შექმნა და ამას ქვია დესტრუქტურიზაცია
console.log(age);


//რომელიც პარამეტრად გადავცემ იმდენი რაოდენობის რიცხვს რამდენიც  მინდა
function sum(..._numbers){//_numbers ეს არის ცვლადის სახელი
     console.log(_numbers);
}

sum(1, 9, 434, 76)
//შემიძლია რამდენიც მინდა იმდენი პარამეტრი გადავცე 
//ამობეჭდავს როგორც მასივს [ 1, 9, 434, 76 ]
//_numbers-სი ისე მიიღო როგორც მასივი
//მაგრამ ..._numbers მიწერია სამი წერტილი და ეს ნიშნავს რომ რამდენი პარამეტრიც არ უნდა გადმოგცენ შემიქმენი _numbers ბაიდინგი და ამ ბაიდინგს მიაბი მნიშვნელობა რომელიც არის მასივი და რომელშიც არის ყველა ელემენტი ჩაყრილი, (1, 9, 434, 76)რომელიც პარამეტრებად გადმოგეცი,ანუ მასივათ კიარ გადავეცი არამემედ პარამეტრებად გადავეცი და მასივად გადააქცია

//აქ შემიძლია _numbers-ის მაგივრად სხვა რამ ჩავწერო:
function sum(...Eleonora){
     console.log(Eleonora);
}
sum('John','Natalia','Jeison','Tom','Stiven');//ამობეჭდავს როგორც მასივს
//არანაირი მნიშვნელობა არ აქვს (...Eleonora)აქ რა წერია ეს არის ცვლადის სახელი


 