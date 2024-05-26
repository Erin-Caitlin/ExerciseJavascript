let userInput = document.getElementById('id-number')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let userOutput = document.getElementById('result')

function getDateOfBirth() {
    userOutput.innerHTML = userInput.value;
}

 let dateOfBirth = function() {
    console.log(getDateOfBirth.slice(0, 6)); 
}
btn1.addEventListener('click', dateOfBirth)

let identifyGender = function() {
    console.log(getDateOfBirth.slice(6, 10));
}

function gender() {
    if (gender > 5000)
        console.log(Male);
    else {
        console.log(Female);
    }
}
btn2.addEventListener('click', gender)
