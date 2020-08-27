const hamburguer = document.querySelector('.hamburguer')
const navList = document.querySelector('.nav__items')


hamburguer.addEventListener('click', () =>{
  navList.classList.toggle('show')
})
