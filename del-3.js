const arr = [
    615, 692, 192, 52, 151,
    251, 413, 283, 360, 534,
    89, 728, 35, 166, 462,
    556
    ];


//Loop som loopar över alla element över alla element i denna array och console.loggar ut varje värde.

arr.forEach(element => console.log(element));

//Loop som loopar över alla element i denna array baklänges och console.loggar ut varje värde.

arr.slice().reverse().forEach(element => console.log(element));


//Funktion som tar in en array och returnerar en sorterad version av samma array (störst till minst). Skicka sedan in arrayen ovan i denna funktion.

function sortArray(array) {
    function sortNumbers (a,b) {
        return b-a; 
    }
    console.log(array.sort(sortNumbers))
}

sortArray(arr);
