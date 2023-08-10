
const validateReceiverForm = (e) => {

  if (e.target.closest('.aside__button > button')) {

    const email = document.getElementById('email')
    const tel = document.getElementById('tel')
    const firstname = document.getElementById('name')
    const surname = document.getElementById('surname')
    const inn = document.getElementById('inn')

    function checkForm(elem, error) {

      if (!elem.value) {
        elem.closest('div').classList.add('invalid')
        elem.closest('div').lastElementChild.innerText = error
        scrollTo({top: 2000, behavior:"smooth"})
      } else {
        elem.closest('div').classList.remove('invalid')
        elem.closest('div').lastElementChild.innerText = ''
      }
    }
    
    checkForm(email,'Укажите электронную почту')
    checkForm(tel,'Укажите номер телефона')
    checkForm(surname,'Введите фамилию')
    checkForm(firstname,'Укажите имя')
    checkForm(inn,'Укажите ИНН')

  }
}
export default validateReceiverForm