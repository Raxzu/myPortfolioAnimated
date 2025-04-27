const btnBurger = document.querySelector('.hamburgerMenu')
const menuPanel = document.querySelector('.menuList')
const menuLinks = document.querySelectorAll('.menuList a')
const frameImage = document.querySelector('#frame')
const images = ['gallery1.jpg', 'bluesredbox.jpg', 'chairpaint.jpg', 'paintred1.jpg', 'paint1.jpg', 'mixedpaints.jpg']

btnBurger.addEventListener('click', ()=>{
    menuPanel.classList.toggle('active')
})

document.addEventListener('click', (event)=>{
    if(!menuPanel.contains(event.target) && !btnBurger.contains(event.target)){
        menuPanel.classList.remove('active')
    }
})

menuLinks.forEach((link)=>{
    link.addEventListener('click', ()=> {
        menuPanel.classList.remove('active')
    })
})

let currentImageIndex = 0
frameImage.addEventListener('click', ()=> {
    currentImageIndex++
    if(currentImageIndex >= 5){
        currentImageIndex = 0
    }
    frameImage.src = 'images/' + images[currentImageIndex]

})