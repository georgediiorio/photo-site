// LightGallery script
lightGallery(document.querySelector('.gallery'), {
    licenseKey: '69AC746A-62354883-977B764B-C1A34D5F',
    closeOnTap: true,
    escKey: true,
})

// Copyright footer
let year = new Date().getFullYear();
let copy = `&copy; George DiIorio Photography ${year}.`;
document.getElementById('main-footer').innerHTML = copy;

//Modal
const modal = document.getElementById('contact-modal')
const openBtn = document.querySelector('.main-btn')
const closeBtn = document.querySelector('.close-btn')

openBtn.addEventListener('click', () => {
    modal.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})

window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = 'none'
    }
})


//Form Validation
//const form = document.getElementById('form')
//const name = document.getElementById('name')
//const email = document.getElementById('email')
//const message = document.getElementById('message')
