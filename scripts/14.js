const placeholder = document.getElementById('placeholderText')
const container = document.getElementsByClassName('contentContainer')[0]
const bar = document.getElementsByClassName('progress')[0]

for (i = 0; i < 30; i++) {
  let newp = document.createElement('p')
  newp.innerHTML = 'Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.'
  placeholder.appendChild(newp)
}

container.addEventListener('scroll', function() {
  const allHeight = container.scrollHeight - container.clientHeight
  const percentage = Math.floor(((container.scrollTop) / allHeight * 100))
  bar.setAttribute('style', `width: ${percentage}vw;`)
})