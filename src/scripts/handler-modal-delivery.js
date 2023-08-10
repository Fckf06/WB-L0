
const handlerModalDelivery = (e) => {
  if (e.target?.closest('div').classList.contains('modal__choice') && e.target.classList.contains('modal__choice-inactive')) {
    const arrBtn = Array.from(e.target.closest('div').querySelectorAll('button'))
    const arrRadio = Array.from(e.target.closest('section').querySelectorAll('.radio__text'))
    const arrLabels =  Array.from(e.target.closest('section').querySelectorAll('label'))
    const btnName = e.target.textContent

    arrBtn.forEach(e => e.classList.toggle('modal__choice-inactive'))

    if (btnName === 'Курьером') {

      arrLabels.forEach((e,i) => {
        if (i === 0 ) {
          e.innerHTML = `<span class='radio__text'>${arrRadio[arrRadio.length-1].innerText}</span>`

        } else if (i === 1) {
          e.innerHTML = `<span class='radio__text'>Бишкек, улица Жукеева-Пудовкина, 77/1</span>`
        } else {
          e.innerHTML = `<span class='radio__text'>${arrRadio[0].innerText}</span>`
        }
      })

    } else {
      arrLabels.forEach((e,i) => {
        if (i < arrLabels.length-1) {
          e.innerHTML = `<span class='radio__text'>${arrRadio[arrRadio.length-1].innerText}</span>
          <div class="text__rate">
          <div>
            <span></span>
            <span>4.99</span>
          </div>
          <div>Пункт выдачи</div>
        </div>
          `

        } else {
          e.innerHTML = `<span class='radio__text'>${arrRadio[0].innerText}</span>
          <div class="text__rate">
          <div>
            <span></span>
            <span>4.99</span>
          </div>
          <div>Пункт выдачи</div>
        </div>
          `
        }
      })
    }
  }

  if (e.target.classList.contains('delivery__submit')) {
    e.preventDefault()
    const checkedInput = Array.from(document.querySelectorAll('.modal__input--delivery > input')).find(e => e.checked)
    const targetLabel = checkedInput.closest('.modal__input').querySelector('label')
    const deliveryPoint = document.querySelector('.delivery__point')
    const asideDeliveryPoint = document.querySelector('.aside__delivery-address')
    const asideDeliveryTitle = document.querySelector('.aside__delivery-title')

    deliveryPoint.children[1].children[0].innerText = targetLabel.firstElementChild.innerText
    asideDeliveryPoint.children[0].innerText = targetLabel.firstElementChild.innerText

    if (targetLabel.children[1]) {
      deliveryPoint.children[0].innerText = 'Пункт выдачи'
      asideDeliveryTitle.children[0].innerText = 'Доставка в пункт выдачи'
      deliveryPoint.children[1].children[1].children[0].style.display = ''
      deliveryPoint.children[1].children[1].children[1].style.marginLeft = '4px'

    } else {
      deliveryPoint.children[0].innerText = 'Доставка курьером'
      asideDeliveryTitle.children[0].innerText = 'Доставка курьером'
      deliveryPoint.children[1].children[1].children[1].style.marginLeft = 0
      deliveryPoint.children[1].children[1].children[0].style.display = 'none'
    }
  }
}

export default handlerModalDelivery