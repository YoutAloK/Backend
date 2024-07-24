let email = document.getElementById("email");
let password = document.getElementById("password");

let id=0;

let button = document.getElementById("submit");

let UDB={};

button.onclick=()=>{
    for (const key in UDB) {
        if (UDB[key].email === email.value) {
            alert("Invalid email");
            return;
        }
    }

    id++;
    UDB[id] = {
        email: email.value,
        password: password.value
    };
}
    
    
    
    /*
    id++;
    UDB[id]={
        email:email.value,
        password:password.value
    }*/
