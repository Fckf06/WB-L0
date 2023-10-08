  const email = document.getElementById('email')
  const tel = document.getElementById('tel')
  const firstname = document.getElementById('name')
  const surname = document.getElementById('surname')
  const inn = document.getElementById('inn')
  
  const test_inn = /^\d{14}$/
  const test_text = /[A-zА-яЁё]+/i
  const test_email = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i
  const test_tel = /^\+[0-9] [0-9]{3} [0-9]{3}-[0-9]{2}-[0-9]{2}/i
  
  const error_inn ='Проверьте ИНН'
  const error_firstname = 'Укажите имя'
  const error_surname = 'Введите фамилию'
  const error_email = 'Проверьте адрес электронной почты'
  const error_tel = 'Формат: +9 999 999-99-99'

  validateInput(email, test_email, error_email)
  validateInput(firstname, test_text, error_firstname)
  validateInput(surname, test_text, error_surname)
  validateInput(tel, test_tel, error_tel, true)
  validateInput(inn, test_inn, error_inn)

  function validateInput(elem, test, error, is_tel) {

    if (is_tel) {
      elem.addEventListener('input', e => {
        elem.value = elem.value.replace(/([A-zА-яЁё])/, '').substring(0, 16)
        let str = tel.value.split('')
        if (str[0] !== '+' && e.inputType === 'insertText') str.unshift('+')
        if (str.length === 2 && e.inputType === 'insertText'|| str.length === 6 && e.inputType === 'insertText') {
          str.push(' ')
        } else if (str.length === 10 && e.inputType === 'insertText'|| str.length === 13 && e.inputType === 'insertText') {
          str.push('-')
        }
        e.target.value = str.join('')
        
      })
      tel.addEventListener('paste', e => {
        e.preventDefault(e)
      })
    } 
    elem.addEventListener('focusout', e => {
      if (!test.test(elem.value) && elem.value) {
        console.log('INVALID')
        elem.closest('div').classList.add('invalid')
        elem.closest('div').lastElementChild.innerText = error
      }
    })
    elem.addEventListener('input', e => {
      if (elem === inn) {
        elem.value = elem.value.replace(/([A-zА-яЁё])/, '')
      }
      if (!test.test(elem.value) && elem.value) {
      } else {
        elem.closest('div').classList.remove('invalid')
        elem.closest('div').lastElementChild.innerText = ''
      }
    })
  }


