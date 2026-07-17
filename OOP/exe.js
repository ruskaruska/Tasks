//1.მანქანა: 
/*შექმენი Car კლასი,constructor-ში მიიღოს: brand,year 
   შექმენი მეთოდი showInfo(),რომელიც დაბეჭდავს: BMW - 2022
*/

class Car {
 constructor(brand,year){
    this.brand = brand;
    this.year = year;
 }
   
 showInfo(){
    console.log(`${this.brand} -${this.year}`);
 }
   
};
const Car1 = new Car("BMW", 2022);

Car1.showInfo();//თუ დავწერთ ესე მაშინ  ამოიბეჭდება:BMW-2022

/*console.log(Car1);თუ დავწერთ ესე მაშინ დაიბეჭდება:Car { brand: 'BMN', year: 2022 }*/


class Animal{
	constructor(color,sound){
		this.color = color;
		this.sound = sound;
	}
	
	   animalInfo(){
			 console.log(`${this.color} - ${this.sound}`);
		 }
};
const fox = new Animal("red","fxxfxfxfxfxxf");

fox.animalInfo();

class Animal1{
    constructor(color, sound){
      this.color= color;
      this.sound = sound;
    }

    animalInfo(){
        console.log(`${this.color} - ${this.sound}`);
    }
};

const dog = new Animal1("black", "Woof Woof");

dog.animalInfo();

//2 დავალება:
//შექმენით Student კლასი რომელიც constructor-ში მიიღებს:name,score,შემდეგ 
//შექმენით მეთოდი passed(),რომელიც:
 //თუ ქულა 51-ზე მეტია ან ტოლია, დაბეჭდავს "ჩააბარა";
 //წინააღმდეგ შემთხვევაში დაბეჭდავს "ვერ ჩააბარა"
  
 class Student{
    constructor(name, score){
     this.name = name;
     this.score = score;
    }

    passed(){
        if(this.score >= 51){
            console.log(`ჩააბარა ${this.score} ქულა მიიღო, ${this.name}-მა`);
        } else{
            console.log(`ვერ ჩააბარა ${this.score} ქულა მიიღო, ${this.name}-მა` );
        }
       
    }
 }

 const student = new Student("John", 48);

 student.passed();

 //3.ბანკის ანგარიში:
 //შექმენით BankAccount კლასი: constructor-ში მიიღოს:owner,balance
 //შექმენით მეთოდი deposit(amount),რომელიც ბალანსს დაუმატებს გადაცემულ თანხას.

//მაგალითი:
/*const account = new BankAccount("Ana", 1000);
 account.deposit(500);
 console.log(account.balance);//1500*/

class BankAccount{
   constructor(owner,balance){
    this.owner = owner;
    this.balance = balance;
   }

   deposit(amount){
     this.balance += amount;//არსებულ ბალანსს დაუმატე შეტანილი თანხა.
     console.log(`${this.owner} თქვენს ანგარიშზე არის ${this.balance}`)
   }
}

const account = new BankAccount("John",2000);
account.deposit(500);

//console.log(account.balance);

//4.მართკუთხედი:
//შექმენი Rectangle კლასი,constructor-ში მიიღოს: width, height
//შექმენი მეთოდი getArea(),რომელიც დააბრუნებს ფართობს

 class Rectangle {
    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    getArea(){
      return this.width * this.height;

    }
}   
 const rect = new Rectangle(6,8);
 
console.log(rect.getArea());

//5.Person:
//შექმენი Person კლასი,constructor-ში მიიღოს:name
//შექმენი მეთოდი sayHello(),რომელიც დაბეჭდავს: გამარჯობა, მე ვარ Nika
class Person{
    constructor(name){
        this.name = name;
    }

    sayHello(){
        console.log(`გამარჯობა, მე ვარ ${this.name}`)
    }
}
const humman = new Person("Nika");
humman.sayHello();