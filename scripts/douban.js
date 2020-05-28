const acDropdown = document.getElementsByClassName('acDropdown')[0]
const acTrigger = document.getElementsByClassName('accountDropdown')[0]
const body = document.body
const dropdownList = [acTrigger, acDropdown]
const downloadTrigger = document.getElementsByClassName('downloadTrigger')[0]
const downloadPopup = document.getElementsByClassName('downloadPopup')[0]

acTrigger.addEventListener('click', evt => {
  evt.preventDefault()
  acDropdown.classList.toggle('on')
  acTrigger.classList.toggle('on')
});

[downloadPopup, downloadTrigger].forEach(i => {
  i.addEventListener('mouseover', () => {
    closeAllDropdown()
    downloadPopup.classList.add('on')
    downloadTrigger.classList.add('on')
  })
  i.addEventListener('mouseleave', () => {
    downloadPopup.classList.remove('on')
    downloadTrigger.classList.remove('on')
  })
})

body.addEventListener('click', evt => {
  const dpFields = getDropdownField()
  if (!dpFields.includes(evt.target)) {
    closeAllDropdown()
  }
})

function closeAllDropdown () {
  acDropdown.classList.remove('on')
  acTrigger.classList.remove('on')
}

function getDropdownField () {
  let res = []
  dropdownList.forEach(dp => {
    res.push(dp)
    res.push(...dp.childNodes)
  })
  return res
}