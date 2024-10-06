document.getElementById("show-register").addEventListener("click", show_register);  
document.getElementById("show-login").addEventListener("click", show_login);  

var caja_login = document.getElementById("login");  
var caja_register = document.getElementById("register");  

function show_register(event) {  
    event.preventDefault(); 
    caja_login.classList.add("hide");  
    caja_register.classList.remove("hide");  
}  

function show_login(event) {  
    event.preventDefault();   
    caja_register.classList.add("hide");  
    caja_login.classList.remove("hide");  
}  
