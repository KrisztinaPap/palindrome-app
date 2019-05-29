class UI {
    constructor() {
        this.formInput = document.getElementById("formInput");
    }
}
const palindromeForm = document.getElementById("palindromeForm");
const submit = document.getElementById("submit");
const palResult = document.getElementById("palResult");
const palInfo = document.getElementById("palInfo");


function main(formInput) {
    submit.addEventListener("click", function(){
        event.preventDefault();
        palindrome(formInput);
    })
};

function palindrome() {
    const value = this.formInput.value;
    // Removes special characters and spaces
    let simpleStr = value.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Finds half-length of string, rounded down (middle character doesn't have to match)
    let halfWay = Math.floor(simpleStr.length/2);
    //loop to compare two end characters
    let results = 0;
    for(let i = 0; i < halfWay; i++) {
    if(simpleStr[i] !== simpleStr[simpleStr.length-i-1]) {
    results += 1;
    }
    }

    if (results === 0) {
        palInfo.innerHTML = `Your entry has ${simpleStr.length} letters in it`;
        palResult.innerHTML = "and it's a palindrome!";
    } else {
        palInfo.innerHTML = `Your entry has ${simpleStr.length} letters in it.`;
        palResult.innerHTML = "Sorry, it's not a palindrome!";
    }
}

main(formInput);
