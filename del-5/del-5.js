const input = document.getElementById("input");
const button = document.getElementById("button");
const UL = document.getElementById("UL");

button.addEventListener('click', (e) => {
    if(input.value != ""){
        e.preventDefault();

        const Li = document.createElement('li');
        Li.innerHTML = input.value;
        UL.appendChild(Li);

    }
    else {
        alert("You must write something!");
    }

    


    input.value="";

        

})

