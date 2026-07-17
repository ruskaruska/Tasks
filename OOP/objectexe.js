/*შექმენით ახალი ობიექტი(სტანდარტული სახით) სახელად Person
 
   მიანიჭეთ მას შემდეგი პარამეტრები თქვენს მიერ არჩეული მნისვნელობებით:
          1.firstName(string)
          2.lastName(string)
          3.Age(number)
          4.Gender(string)
          5.Profession(string)
          6.isMarried(bool)
ასევე მიანიჭეთ ფუნქცია, რომელიც ამობეჭდავს Person-ის სახელსა და გვარს კონსოლში.
შემდეგ კონსოლში ამობეჭდეთ ეს ობიექტი, ობიექტის Profession და გამოიძახეთ ფუნქცია,
რომელიც ამობეჭდავს ამ ობიექტის სახელსა და გვარს.
    
*/

let Person = {
    firstName:"Nikolas",
    lastName:"Jeckson",
    Age:34,
    Gender:"Man",
    Profession:"IT",
    isMarried:true,
    showFullName: function(){
      console.log(Person.firstName,Person.lastName);
    }
}
console.log(Person.Profession);
Person.showFullName();

