const urlArr = [
  {
    url: 'https://placedog.net/800/300?id=1'
  },
  {
    url: 'https://placedog.net/800/300?id=2'
  },
  {
    url: 'https://placedog.net/800/300?id=3'
  },
  {
    url: 'https://placedog.net/800/300?id=4'
  },
  {
    url: 'https://placedog.net/800/300?id=5'
  },
]

const totalNum = urlArr.length
let currentPic = 0

const picContainer = document.getElementsByClassName('picContainer')[0]
const navNumContainer = document.getElementsByClassName('navNum')[0]
const dotContainer = document.getElementsByClassName('navDots')[0]
const navLeft = document.getElementsByClassName('navLeft')[0]
const navRight = document.getElementsByClassName('navRight')[0]

for (let i = 0; i < totalNum; i++) {
  // Add pics
  let cPic = document.createElement('img')
  cPic.src = urlArr[i].url
  cPic.classList.add('cPic')
  if (i === currentPic) cPic.classList.add('current')
  picContainer.appendChild(cPic)

  // Add dots
  let cDot = document.createElement('div')
  cDot.classList.add('navDot')
  if (i === currentPic) cDot.classList.add('current')
  dotContainer.appendChild(cDot)
  cDot.addEventListener('click', () => changePic(i))
}

navLeft.addEventListener('click', () => changePic((currentPic - 1 + totalNum) % totalNum))
navRight.addEventListener('click', () => changePic((currentPic + 1 + totalNum) % totalNum))

updateNum(0)

function updateNum (idx) {
  navNumContainer.innerHTML = `${idx + 1} / ${totalNum}`
}

function changePic (idx) {
  if (currentPic === idx) return
  updateNum (idx)
  currentPic = idx
  const allPic = document.getElementsByClassName('cPic')
  const allDots = document.getElementsByClassName('navDot')
  for (let i = 0; i < allPic.length; i++) {
    if (idx === i) {
      allPic[i].classList.add('current')
      allDots[i].classList.add('current')
    } else {
      allPic[i].className = 'cPic'
      allDots[i].className = 'navDot'
    }
  }
}