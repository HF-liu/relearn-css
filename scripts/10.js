const icon = document.getElementById('burgerIcon')
const navbar = document.getElementsByClassName('navBar')[0]

icon.addEventListener('click', () => {
  navbar.classList.toggle('responsive')
})


//W3School
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}