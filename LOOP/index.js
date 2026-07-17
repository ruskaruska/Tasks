//1.დაბეჭდე რიცხვები 1-დან 15-მდე while loop-ით
/*let number = 1;

while (number <= 15) {
    console.log(number)
    number++;
}*/

//თუ დავწერთ while (number <= 15) აქ number++ ამას.
//ესე while (number <= 15, number++) ეს არის შეცდომა და რატომ:
//რას ნიშნავს (number <= 15, number++)?
/*აქ გამოყენებულია comma operator(მძიმის ოპერატორი)

ჯავასკრიპტში:

(a, b)- აბრუნებს ბოლო მნიშვნელობას, ანუ b-ს

ამ შემთხვევაში:
(number <= 15, number++)
რეალურად ნიშნავს მხოლოდ number++

რა მოდხება while-ში?
number++ აბრუნებს ძველ მნიშვნელობას:

მაგალითად:

თუ number = 1
number++ აბრუნებს 1(true)

შემდეგ number ხდება 2

შემდეგ ისევ true..

და ასე გაგრძელდება 
უსასრულოდ

ანუ while პირობა აღარ ამოწმებს number <= 15-ს და ციკლი შეიძლება უსასრულოდ (infinite loop) გახდეს.
*/
//რატომ არ შეიძლება number++ იყოს while-ის პირობაში?
/*while-ს სწირდება პირობა (true ან false) 
   while მუშაობს ასე:
   სანამ პირობა არის true-ციკლი გრძელდება
   როცა პირობა გახდება false ციკლი ჩერდება

   მაგალითად:
   while (number <= 15)
   აქ პირობაა:
   number <=15 ? true ან false

   number++ პირობა არ არის 

   number++ ნიშნავს:
   გაზარდე number 1-ით
   დააბრუნე ძველი მნიშვნელობა

   let number = 1;
   console.log(number++);//გამოიტანს 1
   console.log(number);// ახლა number = 2

   ანუ number++ არ ამოწმებს არაფერს ის უბრალოდ ზრდის რიცხვს
*/

//რა მოხდება while-ში?
/*number++ აბრუნებს ძველ მნიშვნელობას:
  მაგალითად:
  თუ number = 1
  number++ აბრუნებს 1(true)
  ამის გადაწერა არ დამიმთავრებია
 */

//1-დან 10-მდე რიცხვების გამოტანა;
/*let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}*/

//10-დან 1-მდე რიცხვების გამოტანა
/*let num = 10;

while (num >= 1) {
    console.log(num);
    num--;
}*/

//ლუწი რიცხვები 1-დან 20-მდე
/*let number1 = 1;

while (number1 <= 20) {
    if (number1 % 2 === 0) {
        console.log(number1);
    }
    number1++;
}*/

//რიცხვების ჯამი 1-დან 10-მდე
/*let num1 = 1;
let sum = 0;

while (num1 <= 10) {
    sum += num1;
    num1;

}
console.log(sum);*/


//5-ის გამრავლების ტაბულა (5 x 1...5 x 10)
/*let i = 1;

while (i <= 10) {
    console.log(`5 x ${i} = ${5 * i}`);
    i++;
}*/

//რიცხვების გამოტანა სანამ 0 არ შეხვდა
/*let num = 5;

while (num > 0) {
    console.log(num);
    num--;
}
*/
//მხოლოდ კენტი რიცხვების ჯამი 1-დან 20-მდე
//ჯერ დავბეჭდოთ  რიცხვები 1-დან 20-მდე
/*let num = 0;
while (num < 20) {
    num++;
    console.log(num);
}*/
//დავბეჭდოთ კენტი რიცხვები
/*let num1 = 1;
while (num1 < 20) {
    if (num1 % 2 !== 0) {
        num1++;
    }

}
console.log(num1);*/

//დავბეჭდოთ კენტი რიცხვების ჯამი
/*let number = 1;
let sum = 0;
while (number < 20) {
    if (number % 2 !== 0) {
        sum += number;

    }
    number++;
}
console.log(sum);*/


/*let number = 1;
let sum = 0;

while (number < 20) {
    if (number % 2 !== 0) {
        sum += number;
        console.log(sum);
    }
}   თუ დავწერდი ესე:
    აქ number ყოველთვის 1 დარჩება
    უნდა დაავამატო  number++

    ლოგიკა უნდა იყოს ესეთი:
    ვიწყებთ:

    ვიწყებთ number = 1
    ვამოწმებთ კენტია თუ არა(number % 2!== 0)
    თუ კენტია ვამატებთ sum-ს
    შემდეგ number უნდა გავზარდოთ

    console.log(sum); შიგნით დაწერა არ შეიძლება რადგან: ყოველ ნაბიჯზე ჯამს დაბეჭდავს
    საბოლოო ჯამისთვის  უნდა დავბეჭდოთ ბოლოში
*/

//8️⃣ რიცხვის ფაქტორიალი while loop-ით
/*რა არის ფაქტორიალი

რიცხვის ფაქტორიალი ნიშნავს:
   n! = n × (n-1) × (n-2) × ... × 1

   5! = 5 × 4 × 3 × 2 × 1 = 120
 */
//1.შევქმნათ ცვლადი რიცხვისთვის
//let n = 5;

//2.შევქმნათ ცვლადი შედეგისთვის
//ფაქტორიალი ყოველთვის იწყება 1-დან
//let result = 1;

//3. while loop-ში: result გაამრავლო n-ზე,შემდეგ n შეამცირო 1-ით
//result = result * n
//n--
//არასწორი ვერსია:
/*let num = 5;

let result1 = 1;
while (num <= 5) {
    result1 = result1 * num;
}
console.log(result1);*/
/*აქ პრობლემა ის არის რომ num არ იცვლება ის ყოველთვის 5 რჩება 
ამიტომ while (num <= 5)
ყოველთვის true იქნება → და მივიღებთ უსასრულო ციკლს.
*/

//სწორი ვერსია:
let n = 5;

let result = 1;
while (n > 0) {
    result = result * n;
    n--;
}
console.log(result);
/*ფაქტორიალში რიცხვი უნდა შემცირდეს ყოველ ნაბიჯზე 
 5! = 5 * 4 * 3 * 2 * 1

 ციკლი მუშაობს ასე:
 n            result
 5               5
 4               20
 3               60
 2               120
 1               120
*/

//წინა მაგალითში ჩვენ  5-დან 1-მდე გავაკეთეთ ფაქტორიალი:
//გავაკეთოთ 1-დან 5-მდე:
let number = 5; //number არ იცვლება 
let i = 1; //i არის counter-ი
let result2 = 1;

while (i <= number) {
    result = result * number;
    i++;
}

console.log(result);

let num = 7;
let counter = 1; //ფაქტორიალი არის 1 × 2 × 3 × 4 × 5 × 6 × 7 ამიტო უნდა გავამრავლოთ counter-ზე
let result3 = 1;
while (counter <= num) {
    result3 = result3 * counter;
    counter++;
}

console.log(result3);

//მოცემულია რიცხვი 5487 უნდა დაითვალო რამდენი ციფრისგან შედგება ეს რიცხვი
//უნდა გამოვიყენოთ Math.floor(num / 10)ბოლო ციფრს აშორებს რიცხვს
//ყოველ ნაბიჯზე უნდა დავთვალოთ counter
/*
5487 → 548
548 → 54
54 → 5
5 → 0 
*/

let num1 = 5487;
let count = 0;

while (num1 > 0) {
    count++;
    num1 = Math.floor(num1 / 10);
}

console.log(count); //4
/*ავხსნათ როგორ გამოვიდა 4;
  რიცხვი 5487 შედგება 4 ციფრისგან:

  ციკლი ყოველ ნაბიჯზე:
  count-ს ზრდის
  num1- აშორებს ბოლო ციფრს

  num1          რა ხდება                   count
  5487          პირველი ციფრის დათვლა      1
  548           მოვაშორეთ 7                  2
  54            მოვაშორეთ 8                  3
  5             მოვაშორეთ 4                  4
  0             მოვაშორეთ 5 - ციკლი ჩერდება

  რატომ მუშაობს:Math.floor(num1 / 10)
   5487 / 10 = 548.7
   Math.floor()შლის ათწილადს:
   548
   ანუ ბოლო ციფრი იშლება
 */