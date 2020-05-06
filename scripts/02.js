const hoverButton = document.getElementById('hoverButton')
const dropdown = document.getElementById('dropdown')

document.addEventListener('mouseover', evt => {
  const curEle = evt.target
  if (curEle === hoverButton || dropdown.contains(curEle)) {
    dropdown.classList.add('on')
  } else {
    dropdown.classList.remove('on')
  }
})