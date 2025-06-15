let body = document.getElementById("body");
let form = document.getElementById("form");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let phnum = document.getElementById("number");
let bdate = document.getElementById("bdate");
let fage = document.getElementById("fage");
let mail = document.getElementById("mail");
let pass = document.getElementById("pass");
let cnfpass = document.getElementById("cnfpass")
let btn = document.getElementById("btn");
let file = document.getElementById("file");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");
let p6 = document.getElementById("p6");
let p7 = document.getElementById("p7");

window.addEventListener('keydown', (event) =>{
    if(event.key == "Enter"){
      event.preventDefault();
  }
  })
function myFunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
function myFunction2() {
    var x = document.getElementById("cnfpass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


btn.addEventListener('click', (event) => {
    event.preventDefault();
    let inp1 = fname.value;
    let inp5 = lname.value;
    let inp3 = mail.value;
    let inp4 = pass.value;
    let inp6 = number.value;
    let inp7 = cnfpass.value;
    let inp8 = bdate.value;
    let inp10 = file.value;
    let nums = "0123456789";
    if (!namevalid(inp1)) {
        alert("Enter Valid First Name");
        return false;
    }
    if (!namevalid(inp5)) {
        alert("Enter Valid Last Name");
        return false;
    }
    if (!phnumvalid(inp6)) {
        alert("Enter Valid Phone Number");
        return false;
    }

    const today = new Date();
    const bDate = new Date(inp8);
    const age = today.getFullYear() - bDate.getFullYear();
    const month = today.getMonth() - bDate.getMonth();
    console.log(age);
    if (age < 18 || (age === 18 && month < 0)){
        alert("You must be at least 18 years old.");
        return false;
        
    }
    

    if (!isemailvalid(inp3)) {
        alert("Enter valid Email");
        return false;
    }
    if (!isValid(inp4)) {
        alert("Enter valid Password");
        return false;
    }
    if (inp7 !== inp4) {
        alert("Password Dosn't Match")
    }
    
    
    
    if (!validfile(inp10)) {
        alert("Enter An Image");
        return false;
    }
    else {
        alert("Submitted successfully");
        copy(inp1, inp5, inp6, inp8, inp3, inp4);
        // p.style.color = 'green';
    }
})
function namevalid(inp1) {
    return /^[A-Z][a-z]{1,11}$/.test(inp1);
}
function isemailvalid(inp3) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inp3);
}
function isValid(inp4) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{8,}$/.test(inp4);
}
function phnumvalid(inp6){
    return /^[789]\d{9}$/.test(inp6);
}
function valgender(inp9){
    return /^(male|female)$/i
}
function validfile(inp10){
    return /\.(jpg|jpeg|png|gif|bmp|webp)$/i.exec(inp10);
}
function copy(inp1, inp5, inp6, inp8, inp3, inp4){
    p1.innerHTML = "First Name - "+" "+ inp1;
    p2.innerHTML = "Last Name - " +" "+ inp5;
    p3.innerHTML = "Phone No. - " +" "+ inp6;
    p4.innerHTML = "Date of Birth - " +" "+ inp8;
    p5.innerHTML = "Email - " +" "+ inp3;
    p6.innerHTML = "Password - " +" "+ inp4;
}
bdate.addEventListener('focusout', () => {
    let inp8 = bdate.value;
    const today = new Date();
    const bDate = new Date(inp8);
    const age = today.getFullYear() - bDate.getFullYear();
    const month = today.getMonth() - bDate.getMonth();
    fage.innerHTML = +" "+ age;
})