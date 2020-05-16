const modal = document.getElementsByClassName('modal')[0]
const closeBtn = document.getElementById('closeModalButton')
const openBtn = document.getElementById('openModalButton')
const formContainer = document.getElementsByClassName('formContainer')[0]
const form = document.getElementsByClassName('loginForm')[0]

closeBtn.addEventListener('click', () => {
  modal.classList.remove('on')
})

openBtn.addEventListener('click', () => {
  modal.classList.add('on')
})

modal.addEventListener('click', evt => {
  modal.classList.remove('on')
})

formContainer.addEventListener('click', evt => {
  evt.stopPropagation()
})

form.addEventListener('submit', evt => {
  evt.preventDefault()
  const userName = document.getElementById('userName').value
  const password = document.getElementById('password').value
  const rememberMe = document.getElementById('rememberMe').checked
  
  document.getElementById('loginInfo').innerHTML = `Username: <strong>${userName}</strong><br><br>Password: <strong>${password}</strong><br><br>You want me to remember you? <strong>${rememberMe ? 'ALWAYS' : 'Not today dear. I will call you later.'}</strong>`
  modal.classList.remove('on')
})