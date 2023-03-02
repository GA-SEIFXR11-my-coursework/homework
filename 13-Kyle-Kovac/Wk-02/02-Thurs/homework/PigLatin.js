function translateToPigLatin(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const words = text.toLowerCase().split(' ')
    const result = []
    for (const word of words) {
        if (vowels.includes(word[0])) {
            result.push(word + "way")
        } else {
            const firstMatch = word.match(/[aeiou]/g) || 0;
            const vowelIndex = word.indexOf(firstMatch[0]);
            const newWord = word.substring(vowelIndex) + word.substring(0, vowelIndex) + "ay";
            result.push(newWord)
        }
    }
    return result.join(' ')
}

function btn(){
    let userInput = document.getElementById('userInput').value
    const p = document.getElementById("result")
    p.textContent = translateToPigLatin(userInput);  
}




console.log(translateToPigLatin('Hello there'))