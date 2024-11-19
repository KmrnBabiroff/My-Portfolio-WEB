let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

function sendMail(){
    let parms
= {     Name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        number : document.getElementById("number").value,
        Message : document.getElementById("message").value,

}

emailjs.send("service_3","template_m307mh4",parms).then(alert("Email Sent!!"))}