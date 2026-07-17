function listen(something, callback) {
    let object = {
        target: "thing"
    }

    if (something === 'click') {
        callback(object)
    }
}

function doSomething(event) {
    console.log(event)
}

listen("click", doSomething)

//სავარჯიშო 1;  
function printMessage(callback) {
    callback()
}

function showResult(result) {
    console.log("გამარჯობა მე ვწერ callback-ით")
}

printMessage(showResult);

//სავარჯიშო 2:
//1 ეტაპი: callback(result) უნდა გამოვიძახოთ:callback-ს უნდა გადაეცეს result:
function calculateSum(a, b, callback) {
    let result = a + b
    callback(result)
}
//2 ეტაპი:შევქმნათ sum ფუნქცია,რომელიც მიიღებს result-ს:
function sum(result) {
    console.log("ჯამი არის:", result)
}

calculateSum(4, 5, sum);