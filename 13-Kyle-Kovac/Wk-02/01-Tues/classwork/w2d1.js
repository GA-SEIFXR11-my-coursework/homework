//let p2 = document.getElementById("pid");

//let whatYear = prompt("what is the year ")

  
  //  if(whatYear == 2023){
  //      p2.textContent ="I'm in the present! 👑" 

 //   }else if(whatYear < 2023){
//        p2.textContent = "Whoaa!! Blast from the past! 🥳"
 //   }else if (whatYear > 2023){
//p2.textContent = "Hello from the future self! 🔮"
//}

const p1 = document.createElement('p')
p1.textContent = "kyle woz ere beforebegin"
document.body.appendChild(p1)
document.body.insertAdjacentElement('beforeBegin', p1)

const p2 = document.createElement('p')
p2.textContent = "kyle woz ere afterEnd"
document.body.appendChild(p2)
document.body.insertAdjacentElement('afterEnd', p2)