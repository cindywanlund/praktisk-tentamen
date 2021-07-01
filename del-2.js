//Klassisk funktion som returnerar en valfri siffra 
function returnNumber() {
    return 10; 
}


//Arrow funktion som returnerar en valfri siffra 
returnNum = () => 5;

//Klassisk funktion som tar in två värden (nummer) och returnerar summan av dessa 
function addNumbers (x=5, y=10) {
    return x + y;
}

//Arrow funktion som tar in två värden (nummer) och returnerar summan av dessa 
addNum = (x=2, y=3) => x + y;


//Valfri funktion som tar in en annan funktion och sedan anropar denna 
function callFunction(minFunktion){
    return minFunktion(10,20);
}

console.log(callFunction(addNumbers));


