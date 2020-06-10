const acDropdown = document.getElementsByClassName('acDropdown')[0]
const acTrigger = document.getElementsByClassName('accountDropdown')[0]
const body = document.body
const dropdownList = [acTrigger, acDropdown]
const downloadTrigger = document.getElementsByClassName('downloadTrigger')[0]
const downloadPopup = document.getElementsByClassName('downloadPopup')[0]
const inputField = document.getElementsByClassName('inputField')[0]
const textarea = document.getElementById('inputText')
const label = document.getElementById('inputLabel')
const inputContainer = document.getElementsByClassName('inputContainer')[0]
const inputNav = document.getElementsByClassName('inputNav')[0]
const inputFields = [inputField, inputContainer, inputNav, textarea, label]
const trendingCard = document.getElementsByClassName('doubanTime')[0]
const topicCard = document.getElementsByClassName('topics')[0]
const followers = document.getElementsByClassName('followers')[0]
const picContainers = document.getElementsByClassName('pic')
const floatButton = document.getElementsByClassName('floatButton')[0]
const tabs = {
  comment: document.getElementsByClassName('inputComment')[0],
  pic: document.getElementsByClassName('inputPic')[0],
  recommend: document.getElementsByClassName('inputLink')[0]
}
const copies = {
  comment: '分享生活点滴...',
  pic: '分享我的照片',
  recommend: '我的推荐理由...'
}
let curKey = 'comment'
let curTab = document.getElementsByClassName('inputComment')[0]

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
  const inputFields = getInputField()
  if (!dpFields.includes(evt.target)) {
    closeAllDropdown()
  }
  if (!inputFields.includes(evt.target) && !textarea.value) {
    label.innerHTML = copies[curKey]
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

function getInputField () {
  let res = []
  inputFields.forEach(dp => {
    res.push(dp)
    res.push(...dp.childNodes)
  })
  return res
}

function changeTab(des) {
  curTab.classList.remove('cur')
  curTab.classList.remove('active')
  tabs[des].classList.add('cur')
  tabs[des].classList.add('active')
  curTab = tabs[des]
  curKey = des
  label.innerHTML = copies[des]
  label.style.display = 'block'
  inputField.classList = ''
  inputField.classList.add('inputField')
  inputField.classList.add(des)
  inputField.classList.add('active')
  textarea.value = ''
}

textarea.addEventListener('focus', function() {
  label.innerHTML = ''
  if(inputField.classList.contains('inactive')) {
    inputField.classList = 'inputField active comment'
  }
})

document.getElementsByTagName('body')[0].onscroll = () => {
  if (topicCard.getBoundingClientRect().top <= 5) {
    topicCard.style.position = 'fixed'
    topicCard.style.top = '5px'
    followers.style.position = 'fixed'
    followers.style.top = '545px'
  }
  if (trendingCard.getBoundingClientRect().bottom >= -5) {
    topicCard.style.position = ''
    followers.style.position = ''
  }
}

function setPicAttributes () {
  const parent = document.getElementsByClassName('picContainer')[0]
  if (parent.classList.contains('collapse')) {
    for (let i = 0; i < picContainers.length; i++) {
      let curEle = picContainers[i].childNodes[0]
      curEle.style.width = '526px'
      curEle.style.height = 'auto'
    }
  } else {
    for (let i = 0; i < picContainers.length; i++) {
        let curEle = picContainers[i].childNodes[0]
        const width = curEle.clientWidth
        const height = curEle.clientHeight
        if(width <= height) {
          curEle.style.width = '112px'
          curEle.style.height = 'auto'
          curEle.style.maxHeight = 'initial'
        } else {
          curEle.style.height = '112px'
          curEle.style.width = 'auto'
          curEle.style.maxWidth = 'initial'
        }
    }
  }
}

function toggleSinglePic(event) {
  const ele = document.getElementsByClassName('spicContainer')[0]
  ele.classList.toggle('collapse')
}

function togglePic(event) {
  if (event.target.nodeName === 'IMG') {
    event.target.parentElement.parentElement.classList.toggle('collapse')
  } else {
    event.target.parentElement.classList.toggle('collapse')
  }
  setPicAttributes()
}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(setPicAttributes, 300)
}, false)