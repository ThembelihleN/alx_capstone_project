//Select all the DOM elements
const form = document.getElementById("form");
const name = document.getElementById("name")
const password = document.getElementById("email");
const message = document.getElementById("msg-area")
const p = document.getElementById("error");
const button = document.querySelector("button");


//email regular expression
//const regExp = (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)

//email validation function
function validateEmail(email) {
  const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regExp.test(email)) {
      p.textContent = '';
      form.submit();
  } else {
      p.textContent = 'Please enter a valid email address.';
  };
}


button.addEventListener('click', (event) => {
  const email = document.getElementById('email').value;
  validateEmail(email);
  event.preventDefault();
});

document.addEventListener('DOMContentLoaded', function (){
  const contactform = document.getElementById('form')
  contactform.addEventListener('submit', function (event){
    event.preventDefault();

  })
})
