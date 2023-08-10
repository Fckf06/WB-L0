
const handlerModalPayment = (e) => {

  if (e.target.classList.contains('payment__submit')) {
    e.preventDefault()
    const cards = document.querySelectorAll('.payment__icon')
    const selected_card = e.target.closest('.modal__form').getElementsByTagName('input')
    const card = Array.from(selected_card).find(e => e.checked)
    .closest('.modal__input').querySelector('.radio__icon > span').classList[0]
    for (let i = 0; i< cards.length; i++) {
      cards[i].children[0].classList.remove( cards[i].children[0].classList[0])
      cards[i].children[0].classList.add(card)
    }
  }
}
export default handlerModalPayment
