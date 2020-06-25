const seats = document.getElementsByClassName('seat')
let numOfSeats = 0
const tipText = document.getElementById('numSelected')

for(let i = 0; i < seats.length; i++) {
  seats[i].addEventListener('click', function () {
    if (this.classList.contains('occ')) {
      return
    } else if (this.classList.contains('selected')) {
      this.classList.remove('selected')
      numOfSeats--
      setNum()
    } else {
      this.classList.add('selected')
      numOfSeats++
      setNum()
    }
  })
}

function clearAll() {
  numOfSeats = 0
  for(let i = 0; i < seats.length; i++) {
    if (seats[i].classList.contains('selected')) {
      seats[i].classList.remove('selected')
    }
  }
  setNum()
}

function setNum () {
  tipText.innerHTML = `${numOfSeats} ${numOfSeats > 1 ? 'seats' : 'seat'}`
}

setNum()