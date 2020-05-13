const allItems = document.getElementsByClassName('singleAcc')

for (let i = 0; i < allItems.length; i++) {
  allItems[i].addEventListener('click', evt => {
    evt.target.classList.toggle('on')
  })
}


// W3School

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}