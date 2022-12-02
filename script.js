function passwordMatch(){
    const pw = document.getElementById("password");
    const pwc = document.getElementById("confirm-password");
    const errMsg = document.querySelector(".error");
    if(pw.value != pwc.value){
        pw.setCustomValidity(" ");
        pwc.setCustomValidity(" ");
        errMsg.innerHTML = "*Passwords do not match";
        return false;
    }else{
        return true;
    }
}