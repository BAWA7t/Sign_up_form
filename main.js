document.addEventListener("DOMContentLoaded", function(){
    let password = document.querySelector("#password").value;

    let confirmPassword = document.querySelector("#confirmpassword").value;

    let error = document.querySelector("#error");
    if(password == "" && confirmPassword == "") {
        error.innerHTML = "password do not match";
    }
    else if(password === confirmPassword){
        error.innerHTML = "";
    }
    

    console.log("hyah")
})