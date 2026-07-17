/*const car1 ={
    brand: "BMW",
    year: 2022
};

const car2 ={
    brand:"Mercedes",
    year: 2021
};*/

//კარგი გზა არის შევქმნათ კლასი:
class Car {
    constructor(brand,year){
        this.brand = brand;
        this.year = year;
    }
}
//შემდეგ ამ კლასის მიხედვით ობიექტებს ვქმნით:
const car1 = new Car("BMW",2022);
const car2 = new Car("Mercedes",2021);

console.log(car1);
console.log(car2);

//ბანკის ანგარიში: owner-მფლობელი, withdraw-თანხის გატანა
/*class BankAccount{
    constructor(owner,balance){
      this.owner = owner;
      this.balance = balance
    }

    deposit(amount){
        this.balance += amount;
    }

}*/
//owner და balance -properties(თვისებები)
//deposit()- method(მეთოდი),ანუ ფუნქცია,რომელიც კლასის შიგნითაა დაწერილი.

//რას აკეთებს deposit(amount)?
//this.balnce += amount;

//იგივეა,რაც:
//this.balance = this.balance + amount;

//მაგალითი;
/*const account = new BankAccount("Ana", 1000);

account.deposit(500);

console.log(account.balance);*/

//ამოცანის განხილვა ნაბიჯ-ნაბიჯ:
//1.balance = 1000
//2.deposit(500)-ის გამოძახებისას:
   //this.balance = 1000 + 500
//3.საბოლოოდ:  balance = 1500 
// შედეგი: 1500

/*ანუ deposit() ნიშნავს: ანგარიშზე თანხის შეტანას (დამატებას).*/

//დავალება:დაწერე withdraw(amount) მეთოდი, რომელიც ბალანსიდან თანხას გამოაკლებს.

//this-ის მაგალითი;
class Person{
    constructor(name){
        this.name = name;
    }

    showName(){
        console.log(this.name);
    }
}
const user1 =  new Person("Ana");
const user2 =  new Person("Nika");

user1.showName();
user2.showName();
//this ნიშნავს user1-ს

//მაგალითი ბამკის ანგარიში
class BankAccount{
    constructor(owner,balance){//owner-მფლობელი
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){//Withdraw money - ფულის გამოტანა,amount-რაოდენობა
      this.balance -= amount;
    }

    showBalance(){
        console.log(this.balance);
    }
}

//ობიექტის შექმნა:
const account1 = new BankAccount("Ana",1000);

account1.deposit(500);
account1.withdraw(200);

account1.showBalance();

//მაგალითი სტუდენტი:
class Student{
    constructor(name,score){
      this.name = name;
      this.score = score;
    }

    showInfo(){
        console.log(this.name + "-" + this.score);
    }

    passed(){
        if (this.score >= 51){
          console.log("ჩააბარა");
        }else{
            console.log("ვერ ჩააბარა");
        }
    }
}
const student1 = new Student("Nika",80);
student1.showInfo();
student1.passed();