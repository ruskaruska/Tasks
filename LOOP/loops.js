//ChatGPT 
//ტერმინალში გაშვება: node(აქ სფეისი აუცილებლად) .\loops.js
//1.დაბეჭდეთ რიცხვები 1-დან 10-მდე;
/*for(let num = 1; num <= 10; num++){
   // document.write(num);
   console.log(num);    
}


//2.დაბეჭდე მხოლოდ ლუწი რიცხვები 1-დან 20-მდე
for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
      console.log(i);
    }
}*/

//3.იპოვე 1-დან 10-მდე რიცხვების ჯამი

let sum = 0;
for(let number = 1; number <= 10; number++){
      sum += number;
      
}
console.log(sum);

//4.დავბეჭდოთ რიცხვები უკუღმა
for(let num1 = 10; num1 >= 1; num1--){
  console.log(num1);
}

//5. დავბეჭდოთ გამრავლების ტაბულა
for (let i = 1; i <= 10; i++ ) {
  console.log (`5 * ${i} =${5 * i}`);
}

//6.დათვალე რამდენი ლუწი რიცხვია 1-დან 100-მდე.

//ამოცანის ახსნა:როცა ყოველ ჯერზე,ლუწს ვიპოვით უნდა გაიზარდოს count-ი
let count = 0;

for(let num = 1; num <= 100; num++){
  if(num % 2 === 0){
    console.log(num);//დაბეჭდვაც თუ გვინდა
    count++;
  }
}
console.log(count);


//run - нужно
//let pattern = "";როცა გვინდა ტექსტის დაგროვება(შენება)ლუპში
//6.ვარსკვლავების პატერნი;Left Triangle Pattern
let rows = 5;
//pattern variable carries the final pattern in string format
let pattern = "";

//outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++){

}

