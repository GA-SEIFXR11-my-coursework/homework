var displayItem = document.getElementById('displayItem');
var displayItem1 = document.getElementById('displayItem1');
var zingerCoke = document.getElementById("zingerCoke");
var zingerWater =document.getElementById("zingerWater");
var bigmacCoke = document.getElementById('bigmacCoke');
var bigmacWater = document.getElementById('bigmacWater');
var whopperCoke = document.getElementById('whopperCoke');
var whopperWater = document.getElementById('whopperWater');
var zingerComboPic = document.getElementById("zingerComboPic");
var zingerPic = document.getElementById("zingerPic");
var bigmacComboPic = document.getElementById("bigmacComboPic");
var bigmacPic = document.getElementById("bigmacPic");
var whopperComboPic = document.getElementById("whopperComboPic");
var whopperPic = document.getElementById("whopperPic");
var flexcontainer = document.getElementById("flex-container");
var flexcontainerorder = document.getElementById("flex-container-order");

//zinger combo function
function zingerCombo(){
    
        var ComboMeal = document.createElement("p");
        ComboMeal.setAttribute('id', "p1")
        var ComboMealText = document.createTextNode("Combo Meal $12.50");
        ComboMeal.appendChild(ComboMealText);
        document.getElementById("displayItem").appendChild(ComboMeal);
        zingerComboPic.style.display = "block";
        flexcontainer.style.display = "none";
        flexcontainerorder.style.display = "block"
        
        
        //shows menu options for drinks
        zingerComboPic.onclick = function(){
            var p1 = document.getElementById("p1").innerHTML = "what drink would you like "  ;
            var x = document.getElementById("flex-container-drinks").style.display = "block"; 
            ComboMealText.textContent = ""  
            displayItem1.style.display = "none"
            bigmacCoke.style.display = "none"
            bigmacWater.style.display = "none"
            whopperCoke.style.display = "none"
            whopperWater.style.display = "none"
          
            
        };
             
        
}
//zinger combo function for coke
function zingerComboCoke(){
    
                var p1 = document.getElementById("p1").innerHTML = "";
                var x = document.getElementById("flex-container-drinks").style.display = "none";
                displayItem1.style.display = "block"
                displayItem.style.display = "none"
                displayItem1.textContent = 'Comfim Quantity Zinger Combo with fries and coke';
                document.getElementById("zingerComboPic").src = "/homework-students/13-Kyle-Kovac/Wk-01/03-Sat/hamburgerimg/zingercombo.jpeg"
                document.getElementById("displayItem1").appendChild(zingerComboPic);
               
            }
//zinger combo function for water
function zingerComboWater(){
    
                var p1 = document.getElementById("p1").innerHTML = "";
                displayItem1.textContent = 'Comfim Quantity Zinger Combo with fries and water'
                var x = document.getElementById("flex-container-drinks").style.display = "none";
                displayItem1.style.display = "block"
                displayItem.style.display = "none"
                document.getElementById("zingerComboPic").src = "/homework-students/13-Kyle-Kovac/Wk-01/03-Sat/hamburgerimg/zingercombo.jpeg"
                document.getElementById("displayItem1").appendChild(zingerComboPic);
                }

//zinger combo comfirmation for water or coke options
function comfirmZingerCombo(){
    if(displayItem1.textContent === 'Comfim Quantity Zinger Combo with fries and coke'){
        var zingerComboValue = 12.50
        const zingerComboInput = prompt('Quantity order?');
        var zingerComboTotal = zingerComboValue * zingerComboInput;
        alert('ORDER HAS BEEN COMFIRMED\n Zinger with large fries and coke\nORDER NO: 165' + " Your total is $" + zingerComboTotal)       
        window.location.reload();

    
}else{
    if(displayItem1.textContent === "Comfim Quantity Zinger Combo with fries and water"){
        var zingerComboValue = 12.50
        const zingerComboInput = prompt('Quantity order?');
        var zingerComboTotal = zingerComboValue * zingerComboInput;
        alert('ORDER HAS BEEN COMFIRMED\n Zinger with large fries and water\nORDER NO: 162' + " Your total is $" + zingerComboTotal)
        window.location.reload();

        
}

}}

//zinger burger by itself function 
function zinger(){
    
    var zingerBurger = document.createElement("p");
    zingerBurger.setAttribute('id', "p2")
    var zingerBurgerText = document.createTextNode("Zinger Burger $5");
    zingerBurger.appendChild(zingerBurgerText);
    document.getElementById("displayItem1").appendChild(zingerBurger);
    zingerPic.style.display = "block";
    flexcontainerorder.style.display = "block"

    zingerPic.onclick = function(){
        var p2 = document.getElementById("p2").innerHTML = ""    
        displayItem.textContent = ' Comfirm Zinger Burger Quantity'
        zingerBurgerText.textContent = ""
        displayItem1.style.display = "none"  
        document.getElementById("displayItem").appendChild(zingerPic);
        document.getElementById("zingerPic").appendChild(displayItem);
    };
         
    
}
//zinger burger function comfirmation  
function zingerComfirm(){
if(displayItem.textContent === " Comfirm Zinger Burger Quantity"){
    var zingerComboValue = 5
        const zingerComboInput = prompt('Quantity order?');
        var zingerComboTotal = zingerComboValue * zingerComboInput;
alert('ORDER HAS BEEN COMFIRMED\n 1 Zinger \nORDER NO: 164'  + " Your total is $" + zingerComboTotal)
    window.location.reload();
}};


//BicMac Combo function
function bigmacCombo(){
    
    var bigmacCombo = document.createElement("p");
    bigmacCombo.setAttribute('id', "p3")
    var bigmacComboText = document.createTextNode("Combo Meal $14.80");
    bigmacCombo.appendChild(bigmacComboText);
    document.getElementById("displayItem").appendChild(bigmacCombo);
    bigmacComboPic.style.display = "block";
    flexcontainer.style.display = "none";
    flexcontainerorder.style.display = "block"

    //shows menu options for drinks
    bigmacComboPic.onclick = function(){
        var p3 = document.getElementById("p3").innerHTML = "what drink would you like"
        var x = document.getElementById("flex-container-drinks").style.display = "block";  
        bigmacComboText.textContent = ""  
        displayItem1.style.display = "none" 
        zingerCoke.style.display = "none"
        zingerWater.style.display = "none"
        whopperCoke.style.display = "none"
        whopperWater.style.display = "none"
    };
         
    
}
//BicMac Combo  function for coke
function bigMacComboCoke(){

            var p3 = document.getElementById("p3").innerHTML = "";
            displayItem1.textContent = 'Comfim Quantity Big-Mac Combo with fries and coke'
            var x = document.getElementById("flex-container-drinks").style.display = "none";
            displayItem1.style.display = "block"
            displayItem.style.display = "none"
            document.getElementById("bigmacComboPic").src = "/homework-students/13-Kyle-Kovac/Wk-01/03-Sat/hamburgerimg/bigmaccombo.jpeg"
            document.getElementById("displayItem1").appendChild(bigmacComboPic);
            }
//BicMac Combo  function for water
function bigMacComboWater(){

            var p3 = document.getElementById("p3").innerHTML = "";
            displayItem1.textContent = "Comfim Quantity Big-Mac Combo with fries and water"
            var x = document.getElementById("flex-container-drinks").style.display = "none";
            displayItem1.style.display = "block"
            displayItem.style.display = "none"
            document.getElementById("bigmacComboPic").src = "/homework-students/13-Kyle-Kovac/Wk-01/03-Sat/hamburgerimg/bigmaccombo.jpeg"
            document.getElementById("displayItem1").appendChild(bigmacComboPic);
            }

//BicMac Combo  comfirmation for water or coke options
function comfirmbigmac(){
if(displayItem1.textContent === "Comfim Quantity Big-Mac Combo with fries and coke"){
    var zingerComboValue = 14.8
    const zingerComboInput = prompt('Quantity order?');
    var zingerComboTotal = zingerComboValue * zingerComboInput;
alert('ORDER HAS BEEN COMFIRMED\n Big-Mac Combo with large fries and coke\nORDER NO: 160'  + " Your total is $" + zingerComboTotal)
window.location.reload();
}else{
if(displayItem1.textContent === "Comfim Quantity Big-Mac Combo with fries and water"){
    var zingerComboValue = 14.8
    const zingerComboInput = prompt('Quantity order?');
    var zingerComboTotal = zingerComboValue * zingerComboInput;
    alert('ORDER HAS BEEN COMFIRMED\n Big-Mac Combo with large fries and water\nORDER NO: 152'  + " Your total is $" + zingerComboTotal)
    window.location.reload();
}

}}

//BigMac burger by itself function 
function bigmac(){

var BigMac = document.createElement("p");
BigMac.setAttribute('id', "p2")
var BigMacText = document.createTextNode("Big-Mac Burger $7");
BigMac.appendChild(BigMacText);
document.getElementById("displayItem1").appendChild(BigMac);
bigmacPic.style.display = "block"
flexcontainerorder.style.display = "block"

bigmacPic.onclick = function(){
    var p2 = document.getElementById("p2").innerHTML = ""    
    displayItem.textContent = 'Comfim Big-Mac Quantity'
    BigMacText.textContent = ""
    displayItem1.style.display = "none"  
    document.getElementById("displayItem").appendChild(bigmacPic);
    document.getElementById("bigmacPic").appendChild(displayItem);    
};
     

}
//Big-Mac burger function comfirmation  
function comfirmbigmac1(){
if(displayItem.textContent === "Comfim Big-Mac Quantity"){
    var zingerComboValue = 7
    const zingerComboInput = prompt('Quantity order?');
    var zingerComboTotal = zingerComboValue * zingerComboInput;
alert('ORDER HAS BEEN COMFIRMED\n 1 Big-Mac \nORDER NO: 148'  + " Your total is $" + zingerComboTotal)
window.location.reload();
}}


//whopper combo function
function whopperCombo(){
    
    var whopperCombo = document.createElement("p");
    whopperCombo.setAttribute('id', "p3")
    var whopperComboText = document.createTextNode("Combo Meal $15.20");
    whopperCombo.appendChild(whopperComboText);
    document.getElementById("displayItem").appendChild(whopperCombo);
    whopperComboPic.style.display = "block";
    flexcontainer.style.display = "none";
    flexcontainerorder.style.display = "block"
    //shows menu options for drinks
    whopperComboPic.onclick = function(){
        var p3 = document.getElementById("p3").innerHTML = "what drink would you like"
        var x = document.getElementById("flex-container-drinks").style.display = "block"; 
        whopperComboText.textContent = ""    
        zingerCoke.style.display = "none"
        zingerWater.style.display = "none"
        bigmacCoke.style.display = "none"
        bigmacWater.style.display = "none"
    displayItem1.style.display = "none"

    };
         
    
}
//whopper Combo  function for coke
function whopperComboCoke(){
            
            var p3 = document.getElementById("p3").innerHTML = "";
            displayItem1.textContent = 'Comfim Quantity whopper Combo with fries and coke'
            var x = document.getElementById("flex-container-drinks").style.display = "none";
            displayItem1.style.display = "block"
            displayItem.style.display = "none"
            document.getElementById("whopperComboPic").src="/homework-students/13-Kyle-Kovac/Wk-01/03-Sat/hamburgerimg/whoppercombo.jpeg"
            document.getElementById("displayItem1").appendChild(whopperComboPic);
            }
//whopper Combo  function for water
function whopperCombowater(){

            var p3 = document.getElementById("p3").innerHTML = "";
            displayItem1.textContent = "Comfim Quantity whopper Combo with fries and water"
            var x = document.getElementById("flex-container-drinks").style.display = "none";
            displayItem1.style.display = "block"
            displayItem.style.display = "none"
            document.getElementById("whopperComboPic").src="/homework-students/13-Kyle-Kovac/Wk-01/03-Sat/hamburgerimg/whoppercombo.jpeg"
            document.getElementById("displayItem1").appendChild(whopperComboPic);
            
            }

//whopper Combo  comfirmation for water or coke options
function comfirmWhopperCombo(){
if(displayItem1.textContent === "Comfim Quantity whopper Combo with fries and coke"){
    var zingerComboValue = 15.50
    const zingerComboInput = prompt('Quantity order?');
    var zingerComboTotal = zingerComboInput * zingerComboValue;
alert('ORDER HAS BEEN COMFIRMED\n 1 whopper Combo with large fries and coke\nORDER NO: 276' + " Your total is $" + zingerComboTotal)
window.location.reload();
}else{
if(displayItem1.textContent === "Comfim Quantity whopper Combo with fries and water"){
    var zingerComboValue = 15.50
    const zingerComboInput = prompt('Quantity order?');
    var zingerComboTotal = zingerComboInput * zingerComboValue;
    alert('ORDER HAS BEEN COMFIRMED\n 1 whopper Combo with large fries and water\nORDER NO: 834' + " Your total is $" + zingerComboTotal)
    window.location.reload();
}

}}

//whopper burger by itself function 
function whopper(){
    
    var whopperburger = document.createElement("p");
    whopperburger.setAttribute('id', "p2")
    var whopperburgertext = document.createTextNode("whopper Burger $5.20");
    whopperburger.appendChild(whopperburgertext);
    document.getElementById("displayItem1").appendChild(whopperburger);
    whopperPic.style.display = "block";
    flexcontainerorder.style.display = "block"

    whopperPic.onclick = function(){
        var p2 = document.getElementById("p2").innerHTML = ""    
        displayItem.textContent = ' Comfirm whopper Quantity'
        displayItem1.style.display = "block"  
        document.getElementById("whopperPic").appendChild(displayItem);
        document.getElementById("displayItem").appendChild(whopperPic);
    };
     

}
//whopper burger function comfirmation  
function whopperComfirm(){
    if(displayItem.textContent === " Comfirm whopper Quantity"){
        var zingerComboValue = 5.20
        const zingerComboInput = prompt('Quantity order?');
        var zingerComboTotal = zingerComboInput * zingerComboValue;
    alert('ORDER HAS BEEN COMFIRMED\n 1 whopper \nORDER NO: 162' + " Your total is $" + zingerComboTotal)
        window.location.reload();
    }};









