const aniIcon = document.getElementsByClassName('aniIcon')[0]
const wAniIcon = document.getElementsByClassName('wAniIcon')[0];

[aniIcon, wAniIcon].forEach(i => {
  i.addEventListener('mousedown', () => {
    i.classList.toggle('clicked')
  })
})



