//switch statement
const expr = "Papayas";
switch (expr){
    case "Oranges":
      console.log("Oranges are $0.59 a pound.");
      break;
      case "Mangoes":
      case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        //Expected output:
        //"Mangoes and papayas are $2.79 a pound."
        break;
        default:
         console.log(`Sorry,we are out of ${expr}.`);
}           

/*ახსნა:
შემოვიტანე ცვლადი const expr და მივანიჭე მნიშვნელობა "Papayas".
switch (expr) ამოწმებს expr-ის მნიშვნელობას და ადარებს თითოეულ case -ს

პირველი case
case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;

    ამოწმებს:
    expr ==="Oranges"
    მაგრამ expr არის "Papayas",ამიტომ ეს ნაწილი გამოტოვდება.

    მეორე და მესამე case
     case "Mangoes":
     case "Papayas":
      console.log("Mangoes and papayas are $2.79 a pound");
      break;

      expr არ არის "Mangoes",ამიტომ პირველი case გამოტოვდება

      შემდეგ:

      case "Papayas":
        ეს უკვე ემთხვევა, რადგან:
        expr ==="Papayas"

        არის true

        ამიტომ შესრულდება console.log("Mangoes and papayas are $2.79 a pound.");
       
        შემდეგ
        break;
        switch-იდან გამოდის და დანარჩენს აღარ ამოწმებს.

        რატომ წერია ორი case ერთად?

        case "Mangoes":
        case "Papayas":
            ეს ნიშნავს:
    თუ expr არის "Mangoes" ან "Papayas",ორივე შემთხვევაში ერთი და იგივე კოდი შესრულდეს         
 */
//იგივეა,რაც:
/*if(expr ==="Mangoes" || expr === "Papayas"){
    console.log("Mangoes and papayas are $2.79 a pound.");
}*/

//თუ expr იქნებოდა:
/*const expr = "Bananas";
//არც ერთი case არ დაემთხვეოდა და შესრულდებოდა:
//default:
  console.log(`Sorry,we are out of ${expr}.`);*/

//მთავარი იდეა:
//1.switch ადარებს მნიშვნელობას case-ებს
//2.break აჩერებს switch-ს
//3.რამდენიმე case შეიძლება ერთსა და იმავე კოდს იყენებდეს
//4.default მუშაობს მაშინ,როცა არც ერთი case არ  დაემთხვა

