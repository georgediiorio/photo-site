

// LightGallery script
lightGallery(document.getElementById('gallery'), {
  licenseKey: '69AC746A-62354883-977B764B-C1A34D5F',
  closeOnTap: true,
  escKey: true,
})

// Copyright footer
let year = new Date().getFullYear()
let copy = `&copy; George DiIorio Photography ${year}.`
document.getElementById('main-footer').innerHTML = copy


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
  if (e.target === modal) {
    modal.style.display = 'none'
  }
})

//Form Validation
const form = document.getElementById('form')
const name = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')

// Show Error Message
function showError(input, message) {
  const formValidation = input.parentElement
  formValidation.className = 'form-validation error'

  const errorMessage = formValidation.querySelector('p')
  errorMessage.innerText = message
}

// Show Vaild Message
function showValid(input) {
  const formValidation = input.parentElement
  formValidation.className = 'form-validation valid'
}

// Check Required Fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() == '')
      showError(input, `${getFieldName(input)} is required`)
    else {
      showValid(input)
    }
  })
}

//Check ipnut Length
function checkLength(input, min, max){
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be least ${min} characters`)
    }else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    }else{
        showValid(input)
    }
}

// Get Field Name
function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1)
}

// Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault()

  checkRequired([name, email, message])
  checkLength(name,5,30)
  checkLength(email,10,150)

})
