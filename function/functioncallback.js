function greet(name, callback){
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye(){
    console.log('Goodbye!');
}

greet('Alice', sayGoodbye);

/*greet ფუნქციის შექმნა:
   function greet(name, callback) აქ შევქმენით ფუნქცია სახელად greet,
   და აქვს ორი პარამეტრი name,callback, პარამეტრი არის ცვლადი, რომელიც ფუნქციის გამოძახებისას მიღებულ მნიშვნელობას მიიღებს,

   პირველი არგუმენტი: Alice
   greet('Alice', sayGoodbye);
   აქ ვიძახებთ greet ფუნქციას
   
   პირველი არგუმენტი:
   Alice 

   name = "Alice"
   ანუ name პარამეტრში მოხვდა 'Alice'

  შეგვიძლია ესე წარმოვიდგინოთ:
     name = 'Alice'
     callback = ?
     
     
     მეორე არგუმენტი - sayGoodbye

      sayGoodbye-ს ფრჩხილების გარეშე გადავცემთ:
      
      greet('Alice',sayGoodbye);
      იმიტომ, რომ გვინდა თვითონ ფუნქცია გადავცეთ callback-ს

      callback = sayGoodbye

      შეგვიძლია წარმოვიდგინოთ:
      name  -  'Alice'
      callback - sayGoodbye ფუნქცია
      ზუსტად ეს არის callback-ის მთავარი იდეა

      sayGoodbye-ის ფრჩხილებით იმიტომ არ ვწერთ რომ:
      sayGoodbye და sayGoodbye() ერთი და იგივე არ არის
      sayGoodbye ნიშნავს ეს არის ფუნქცია და 
      sayGoodbye() ნიშნავს გამოიძახე/შეასრულე ეს ფუნქცია ახლა

      ჩვენ გვინდა greet-ს ფუნქცია გადავცეთ, ამიტომ უნდა დავწეროთ:
      greet('Alice', sayGoodbye);

      და თუ ესე greet('Alice',sayGoodbye());დავწერთ ერორი იქნება


      ახლა greet-ის შიგნით შევიდეთ:
       რადგან გამოვიძახეთ:
       greet('Alice', sayGoodbye);

       ჯავასკრიპტი შეასრულებს:
       console.log(`Hello, ${name}!`);
       იმიტომ რომ:
       name = 'Alice'
       გამოდის Hello, Alice!
       ანუ:
       `${name}` გახდა Alice

       შემდეგ მოდის callback():
       რადგან ჩვენ უკვე ვიცით რომ callback -> sayGoodbye
       ამიტომ:callback(); ფაქტობრივად ნიშნავს sayGoodbye();
       ანუ:შეასრულე ის ფუნქცია, რომელიც callback-ში მივიღეთ

       ჩვენ ხომ შევქმენით sayGoodbye
       function sayGoodbye(){ 
           console.log('Goodbye!'); 
        }
        როდესაც ჯავასკრიპტი ასრულებს 
        callback();
        ის ასრულებს sayGoodbye()-ს
        console.log('Goodbye!');
        გამოიტანს:Goodbye!

        შესრულების თანმიმდევრობა:

        პირველი:
        greet('Alice', sayGoodbye);

       name იღებს:
       'Alice'

       callback იღებს:
       sayGoodbye

       სრულდება:
       console.log(`Hello, ${name}!`);

       Hello, Alice!

       შემდეგ სრულდება:
       callback();

       რაც ამ შემთხვევაში არის:
       sayGoodbye();
       sayGoodbye()ასრულებს:
       console.log('Goodbye!');

       შედეგი:
       Goodbye!

       საბოლოოდ:
       Hello, Alice!
       Goodbye!

       Callback არის ფუნქცია,რომელსაც სხვა ფუნქციას არგუმენტად გადავცემთ, რათა იმ მეორე ფუნქციამ საჭირო დროს გამოიძახოს,
       greet('Alice', sayGoodbye);
       greet არის მთავარი ფუნქცია
       
       sayGoodbye არის Callback ფუნქცია

       callback();
       ნიშნავს;
       გამოიძახე ის ფუნქცია,რომელიც callback-ში გადმომეცი

       greet('Alice', sayGoodbye);
       აქ sayGoodbye არ სრულდება greet-ის გამოძახებამდე
       უბრალოდ გადაეცა greet-ს 
       შემდეგ უკვე greet წყვეტს, როდის გამოიძახოს:
        callback();
        
        ამიტომ ეწოდება მას callback - ფუნქცია,რომელიც სხვა ფუნქციას გადაეცა და შემდეგ იმ ფუნქციამ გამოიძახა
 */
