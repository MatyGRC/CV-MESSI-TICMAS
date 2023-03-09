let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function sendEmail() {
  Email.send({
    Host : "smtp.elasticemail.com",
    SecureToken : "88247c5d-246e-454c-93d0-73878a89277c",
    To : 'mrg.94.grc@gmail.com',
    From : document.getElementById("email").value,
    Subject : document.getElementById("subject").value,
    Body : "Name : " + document.getElementById("name").value
      + ", Email : " + document.getElementById("email").value
      + ", Subject : " + document.getElementById("subject").value
      + ", Message : " + document.getElementById("message").value
  }).then(
  message => alert(message)
  );
}