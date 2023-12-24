$(document).ready(function () {
  $(".account").click(function () {
    $(".account-section").toggleClass("active");
  });
});
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu1");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  // document.querySelector(".second-img").style.display = "block";
});

function myFunction() {
  let menutoggle = document.querySelector(".toggle");
  menutoggle.classList.toggle("active");
}

//////////////////
const form1 = document.querySelector(".form");

const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const password3 = document.getElementById("password3");

form1.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});
function checkInputs() {
  //get the values from the inputs
  const password1Value = password1.value.trim();
  const password2Value = password2.value.trim();
  const password3Value = password3.value.trim();

  if (password1Value === "") {
    //show error
    //add error class
    setErrorFor(password1, "password cannot be blank");
  } else {
    // add success class
    setSuccessFor(password1);
  }
  if (password2Value === "") {
    //show error
    //add error class
    setErrorFor(password2, "New password cannot be blank");
  } else {
    // add success class
    setSuccessFor(password2);
  }
  if (password3Value === "") {
    //show error
    //add error class
    setErrorFor(password3, "Re Type password cannot be blank");
  } else if (password2Value !== password3Value) {
    setErrorFor(password3, "Passwords does not match");
  } else {
    setSuccessFor(password3);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector("small");

  // add error message inside small
  small.innerText = message;

  // add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement; //.form-control
  formControl.className = "form-control success";
}

document.getElementById("edit").addEventListener("click", function () {
  document.querySelector(".reset-password").style.display = "flex";
  // console.log("hi");
});
