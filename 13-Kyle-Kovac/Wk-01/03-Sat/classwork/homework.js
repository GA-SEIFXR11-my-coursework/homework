function btn(){
   const p = document.getElementById("p1")
   p.innerText = "Learning to code"
   p.style.color = 'red'
   p.style.fontSize = '60px'
   p.style.border = '2px blue solid'
   p.style.backgroundColor = 'grey'
  }
console.log(btn)
  
function results(form){
    if(form.mark.value >= 80){
        var result = document.getElementById("result")
        result.innerHTML = "A+"
    } else if(form.mark.value >= 70){
        var result = document.getElementById("result")
        result.innerHTML = "A"
    } else if(form.mark.value >= 60){
        var result = document.getElementById("result")
        result.innerHTML = "B+"
    } else if(form.mark.value >= 50){
        var result = document.getElementById("result")
        result.innerHTML = "B"
    } else if(form.mark.value >= 40){
        var result = document.getElementById("result")
        result.innerHTML = "C+"
    } else if(form.mark.value >= 30){
        var result = document.getElementById("result")
        result.innerHTML = "C"
    } else if(form.mark.value <= 30){
        var result = document.getElementById("result")
        result.innerHTML = "FAILED" 
        }
    }    

function ageCal(form){
var currentYear = 2023;
var currentYear2 = currentYear--
var result = currentYear - form.Age.value
var result2 = currentYear2 - form.Age.value
    if(form.Age.value - currentYear){
         const agere = document.getElementById("agere")
         agere.textContent = `you are roughly `+ result +" "+ result2 ;
    }
}