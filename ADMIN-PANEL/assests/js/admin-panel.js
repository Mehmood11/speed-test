$(document).ready(function () {
  $(".account").click(function () {
    $(".account-section").toggleClass("active");
  });

  //   $("#add").click(function () {
  //     const input_val = $("input").val();
  //     const textarea_val = $("textarea[name=text]").val();
  //     if (input_val.length == 0 && textarea_val == 0) {
  //       alert("PLease Fill the form first");
  //       return false;
  //     } else {
  //       alert("Added successfully");
  //     }
  //   });
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

/////// Form Validation
// const inputs = document.querySelectorAll("input").value;
// const addBtn = document.getElementById("add");
// addBtn.addEventListener("click", function () {
//   if (inputs.length == "") {
//     alert("please fill the form first");
//     return false;
//   } else {
//     alert("Added Successfully");
//   }
// });

// Validation

const form = document.getElementById("form");
const title = document.getElementById("title");
const t_image = document.getElementById("t_image");
const name = document.getElementById("name");
const textarea = document.getElementById("textarea");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get the values from the inputs
  const titleValue = title.value.trim();
  // const t_imageValue = t_image.value.trim();
  // const nameValue = name.value.trim();
  const textareaValue = textarea.value.trim();

  if (titleValue === "") {
    //show error
    //add error class
    setErrorFor(title, "title  cannot be blank");
  } else {
    // add success class
    setSuccessFor(title);
  }

  // if (nameValue === "") {
  // show error
  //add error class
  // setErrorFor(name, "Auther Name cannot be blank");
  // } else {
  // add success class
  // setSuccessFor(name);
  // }
  // if (t_imageValue === "") {
  // show error
  //add error class
  // setErrorFor(t_image, "Title Image cannot be blank");
  // } else {
  // add success class
  // setSuccessFor(t_image);
  // }
  if (textareaValue === "") {
    // show error
    //add error class
    setErrorFor(textarea, "Textarea cannot be blank");
  } else {
    // add success class
    setSuccessFor(textarea);
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

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
