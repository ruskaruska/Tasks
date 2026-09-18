//Problem 1:Prime Number Finder with Multi-Condition Filter
//Prime Number Finder-მარტივი რიცხვების მაძიებელი
//find-პოვნა
//range-დიაპაზონი
//through-მეშვეობით
//skip printing-ბეჭდვის გამოტოვება
//divisor-გამყოფი
/*Write a function that iterates through a range of numbers from start to end using a for loop. For each number, check if it is prime using a while loop.

 1.If the prime number is greater than 50, output "Large Prime: [number]".

 2.If it is a prime number less than or equal to 50, output "Small Prime: [number]".

 3.If it is not prime, skip printing. */
 function findPrimesInRange(start,end){//მოცემულ დიაპაზონში მარტივ რიცხვებს ეძებს.
    for(let i = start; i <= end; i++){
        if (i <= 1)continue;//თუ i <= 1, მიმდინარე იტერაცია გამოტოვოს და for ციკლის შემდეგ იტერაციაზე გადავიდეს.continue:ამ მიმდინარე ციკლის დანარჩენი ნაწილი გამოტოვდება.

        let isPrime = true;
        let divisor = 2;

        //while loop checks for factors
        while(divisor <= Math.sqrt(i)){
            if(i % divisor ===0){
                isPrime = false;
                break;//stop checking once a factor is found
            }
            divisor++;
        }

        //if/else checks the size of the prime number
        if(isPrime){
           if(i > 50){
             console.log(`Large Prime: ${i}`);
           }else{
              console.log(`Small Prime: ${i}`);
           }
        }
    }
 }

 //Example Execution
 findPrimesInRange(45, 60);
 /*შევქმენი ფუნქცია findPrimesInRange მარტივი რიცხვების მაძიებელი და პარამეტრად გადავეცი  start,end, შემდეგ გამოვიყენე for loop-ი და შევქმენი let i ცვლადი და მივანიჭე მნიშვნელობად ფუნქციის პარამეტრი start-ი ; მანამ სანამ i ნაკლებია ან უდრის end-ს მოხდეს ინკრემეტაცია,  if (i <= 1)continue; თუ i <= 1, მიმდინარე იტერაცია გამოტოვოს და for ციკლის შემდეგ იტერაციაზე გადავიდეს.continue:ამ მიმდინარე ციკლის დანარჩენი ნაწილი გამოტოვდება.მაგალითად:i = 1 რადგან 1 <= 1 არის true, continue შესრულდება და პროგრამა პირდაპირ გადავა:i = 2
 let isPrime = true;„დავუშვათ, რომ ეს რიცხვი მარტივია.“
 შემდეგ კოდი შეამოწმებს, მართლა მარტივია თუ არა. თუ აღმოაჩენს, რომ რიცხვს სხვა გამყოფიც აქვს, მაშინ:isPrime = false;გახდება.
 let divisor = 2;divisor = 2 იმიტომ გვაქვს, რომ შემოწმება იწყება გამყოფი 2-დან.
 შემდეგ divisor გაიზრდება: 2 → 3 → 4 → 5 → ... და ვამოწმებთ, იყოფა თუ არა i ამ რიცხვებზე ნაშთის გარეშე.
 i = 47
 ვამოწმებთ:
 47 % 2
47 % 3
47 % 4
47 % 5
...
თუ რომელიმე შემთხვევაში ნაშთი 0 აღმოჩნდა, მაშინ 47 მარტივი აღარ იქნება.

მარტივი რიცხვი შეიძლება იყოს 2-ზეც გაყოფადი — თვითონ 2 არის მარტივი რიცხვი. აქ მიზანია ვიპოვოთ, აქვს თუ არა რიცხვს სხვა გამყოფი, გარდა 1-ისა და საკუთარი თავისა.
 */