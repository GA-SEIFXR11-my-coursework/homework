    function myfunction(someValue1,someValue2, someValue3){
        console.log(`my function got ${someValue1}, ${someValue2}, ${someValue3}  as an input`)
    }

    myfunction("1", "2", "3")


// create a function named getUserInput that does not accept any parameters

function getUserInput(){
  // get input element using element's id
  let myInputElement = document.getElementById("userInput")
  
  // alert the value to the user
  alert(myInputElement.value)
}


// assign the output returned by the function to variable with name 'outputValueVariable'

let outputValueVariable = justReturnAValueAndNothingElse();


// print the value stored in outputValueVariable

console.log(outputValueVariable);


function justReturnAValueAndNothingElse(){
  return "This is a return value";
}


justReturnAValueAndNothingElse();

