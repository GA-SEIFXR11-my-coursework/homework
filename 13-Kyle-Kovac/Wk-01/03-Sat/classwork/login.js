function login(form){
    if(form.user.value === "a" && form.password.value === "a"){
        location.href = "homework.html"
    }else{
    var passuser = document.getElementById("incorrect")
    passuser.innerHTML = "password incorrect asdasd"
}
}