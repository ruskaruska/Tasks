class Car {
	constructor(brand, year){
		this.brand = brand;
		this.year = year;
	}
	
	showInfo(){
		console.log(`${this.brand}-${this.year}`);
	}
};

const Car1 = new Car("BMW",2022);

/*შევქმენი Car კლასი.
constructor-ს მივანიჭე ორი პარამეტრი:brand და year.
constructor-ში ეს მნიშვნელობები შევინახე ობიექტში this-ის გამოყენებით.
შევქმენი მეთოდი showInfo().
showInfo()-ში გამოვიყენე console.log() და template literal(``),რომ დაიბეჭდოს ესეთი ფორმატით: BMW - 2022.
შემდეგ შევქმენი Car კლასის ობიექტი (მაგალითად BMW და 2022) და გამოვიძახე showInfo().

constructor-ინახავს მონაცემებს
this.brand-მანქანის ბრენდი
this.year-გამოშვების წელი
showInfo()-უბრალოდ ბეჭდავს this.brand-სა და this.year-ს
*/

/*
1.class Car:
   class Car{
	 აქ ვქმნით კლასს.
კლასი არის შაბლონი(Blueprint),რომლის მიხედვითაც ვქმნით ობიექტებს.	 
Car - შაბლონია.
Car1 -ამ შაბლონით შექმნილი კონკრეტული მანქანაა.

2.constructor(brand, year);
 constructor არის სპეციალური მეთოდი.
  ის ავტომატურად იძახება, როცა ვწერთ:
	  new Car("BMW", 2022);
		
3.this.brand = brand
    this.brand = brand;
		
		მარცხენა მხარე this.brand ნიშნავს:
		 ამ ობიექტს ჰქონდეს თვისება(property)სახელად brand.
		
		მარჯვენა მხარე brand ნიშნავს:
		ამ ობიექტს ჰქონდეს თვისება (property)სახელად brand
		ეს არის ის მნიშვნელობა,რომელიც constructor-მა მიიღო.
		
		ანუ თუ დავწერ:
		new Car("BMW",2022);
		
		მაშინ:
		brand = "BMW"
		შემდეგ შესრულდება:
		this.brand = brand;
		this.brand = "BMW";
		
		   ანუ ობიექტში ინახება:
			 brand: "BMW"
			 
			 იგივე ხდება აქაც:
			 this.year = year
			 this.year = 2022;


ეხლა განვიხილოთ როგორი ხდება ობიექტი:
  როცა ვწერთ:
   const Car1 = newCar("BMW", 2022);
	 JavaScript-ი ქმნის ასეთ ობიექტს;
	    Car1 = {
			  brand: "BMW",
				year: 2022
			}
			
			ამიტომ შეგვიძლია დავწეროთ:
			Car1.brand
			
			და მივიღებთ;
			 BMW
			 
5.showInfo():
   showInfo(){ ეს არის მეთოდი 
	 მეთოდი არის ფუნქცია,რომელიც კლასის შიგნით არის დაწერილი.
	 
	 6.this.brand
	 this ნიშნავს:(ეს ობიექტი), რომელზეც ახლა მუშაობს მეთოდი.
	 თუ დავწერთ: Car1.showInfo();
	 ანუ this.brand
	 იგივეა რაც:
	 Car1.brand
	 
	 7.const Car1 = new Car("BMW",2022);
	  აქ იქმნება ახალი ობიექტი.
		new ნიშნავს:შექმენი ახალი ობიექტი.
		Car(...)ნიშნავს:გამოიყენე Car კლასი.
		constructor ავტომატურად გაეშვება.
		
	8.Car1.showInfo();
	  ეს ნიშნავს:Car1 ობიექტზე გამოიძახე showInfo() მეთოდი
		ამ დროს this ავტომატურად ხდება Car1.
		
		
კიდევ ერთი ახსნა: this.brand = brand;
ეს არ ნიშნავს,რომ brand-ს თავის თავს ვუტოლებთ.

ეს ნიშნავს რომ:
"ამ ობიექტში შექმენი brand თვისება და შეინახე მასში მიღებული მნიშვნელობა."

მაგალითი: ვთქვათ გვაქვს ყუთი და ყუთს აწერია Car1.
   ამ ყუთში ვდებთ ორ ფურცელს:
	   brand - BMW
		 year  - 2022
 კოდში ვწერთ ესე:
  this.brand = brand;
	this.year  = year;
	
	
	რას ნიშნავს this?
	 this ნიშნავს:
	  "ეს ობიექტი".
		
		მაგალითად;
		const Car1 = new Car("BMW", 2022); 
		 აქ this ნიშნავს "Car1-ს"
		 
		 ამიტომ წარმოდგენა რომ გვქონდეს: this.brand = "BMW";ეს იგივეა რაც Car1.brand = "BMW";  this.year = 2022 იგივეა რაც Car1.year = 2022.
*/

//რატომ წერია მარცხნივ brand და მარჯვნივაც brand?
//  this.brand = brand;
//ორივეგან სიტყვა brand წერია,მაგრამ "ორივე სხვადასხვა რამეს ნიშნავს."
  //მარცხენა მხარე: this.brand ნიშნავს:
  //"ამ ობიექტის brand თვისება(property)".
  //ანუ ობიექტში იქმნება ადგილი სახელად brand.
 
//მარჯვენა მხარე: brand;
//ეს არის "პარამეტრი",რომელიც constructor-მა მიიღო

//მაგალითად:
//new Car("BMW",2022);
//ამ დროს JavaScript აკეთებს ასე:
//   brand = "BMW"; ანუ brand პარამეტრში ინახება
//   year  =  2022;
//ანუ brand პარამეტრში ინახება "BMW".

  //წარმოვიდგინოთ კარადა:
//მარცხენა მხარე(this.brand)არის "უჯრის სახელი"

//მარჯვენა მხარე (brand) არის "ის ნივთი", რომელსაც უჯრაში დებ.
   //უჯრა: brand      <->      ნივთი: "BMW"
//ანუ გამოდის რომ:
//this.brand = brand; ნიშნავს: brand-ის მნიშვნელობა ჩადე ობიექტის brand უჯრაში.
              //ესე დაწერა უფრო მოსახერხებელია.

//შეგვიძლია დავწეროთ ესეც:
  /*constructor(carBrand, carYear){
		 this.brand = carBrand;
		 this.year = carYear;
	}*/
   //this.brand - ობიექტის თვისებაა
   //carBrand -   პარამეტრია.
//აუცილებელი არ არის ორივეს ერთი და იგივე სახელი ერქვას.