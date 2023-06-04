//Azumbra//
document.addEventListener('DOMContentLoaded', () => { //Starts an event listsner//

    let input = document.querySelector("input") 
    let submit = document.querySelector("#submit")     
    submit.addEventListener('click', (functionL) => {
        functionL.preventDefault()
        Check(input.value)      //bind the listener to Check function//
        input.value = ''

    });
});
function Check(string) {           //compares if the string is the same as it was before the turn function//      
    let rString = turn(string)

    if (string == rString) {
alert("is a palindrome")
    } else {
alert("is not a palindrome")
    }
}
function turn(string) {
    return string.split("").reverse().join("")   //turns string around//
}