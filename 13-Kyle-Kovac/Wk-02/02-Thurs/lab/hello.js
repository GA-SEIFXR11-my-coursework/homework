function btn(){
    const userInput = document.getElementById("userInput").value
   if(userInput === 'English'){
    let result = document.getElementById('result')
    result.textContent = "hello"
   } else if(userInput === 'German'){
    result.textContent = "Hallo"
    }else if(userInput === 'Chinese'){
    result.textContent = "你好"
    }else if(userInput === 'French'){
    result.textContent = "Bonjour"
    }else{
        result.textContent = "Sorry, I don't speak " + userInput
    }
}