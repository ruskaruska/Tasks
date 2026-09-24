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
//JSON.stringify გვიბრუნებს ტექსტს, მე შემიძლია ეხლა გადავცე person და დამიბრუნებს სტრინგს ანუ ტექსტს დამიბრუნებს,რომელშიც person-ის სტრუქტურაა აღწერილი,და მე თუ მინდა 
//შემიძლია ეს string-ი 
JSON.stringify(person);
console.log(person);
