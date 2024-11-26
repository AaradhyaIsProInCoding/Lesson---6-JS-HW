function validate(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const msg = document.getElementById("message");
    let message = "";

    if (email === "") {
        message = "Please Enter An Email!";
        msg.style.color = "red";
    }
    else if (password === "") {
        message = "Please Enter A Password!";
        msg.style.color = "red";
    }
    else if (age === "") {
        message = "Please Enter An Age!";
        msg.style.color = "red";
    }
    else {
        message = "Login Successful!";
        msg.style.color = "Green";
    }
    msg.innerText = message
}