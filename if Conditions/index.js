if(new Date().getHours() <18){
    document.getElementById("day").innerHTML = "Good day!";

}
//Date() არის JavaScrip-ის ჩაშენებული ობიექტი,რომელიც ინახავს მიმდინარე თარიღსა და დროს
//.getHours() აბრუნებს მიმდინარე საათს:
//მაგალითად: თუ დრო არის 08:30  მაშინ getHours() იქნება 8, ან დრო 10:15 მაშინ getHours() იქნება 10