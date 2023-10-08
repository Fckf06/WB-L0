
const handlerModal = (e) => {
  if (e.target.classList.contains('modal__button') || e.target.classList.contains('modal') ||
      e.target.classList.contains('modal__close-btn') || e.target.classList.contains('payment__submit') ||
      e.target.classList.contains('delivery__submit')) {

    const modal = e.target.closest('article').lastElementChild
    const del = modal.querySelector('.modal__title > button')
    if (!modal.classList.contains('modal_visible')) {
      modal.classList.toggle('modal_visible')
      modal.firstElementChild.classList.add('modal-appear')
      scroll({top:0, left: 0, behavior: 'smooth'})

    } else {
      modal.firstElementChild.classList.remove('modal-appear')
      modal.firstElementChild.classList.add('modal-disappear')
      setTimeout(() => {
        modal.classList.toggle('modal_visible')
        modal.firstElementChild.classList.remove('modal-disappear')
        document.querySelectorAll('.modal__form').forEach(elem => {
          elem[0].checked = true
        })
      },700)
    }
  }

  if (e.target.classList.contains('modal__button-payment')) {
    document.querySelector('.modal__payment').classList.add('modal_visible')
    document.querySelector('.modal__payment').firstElementChild.classList.add('modal-appear')
    scroll({top:0, left: 0, behavior: 'smooth'})
  }
  if (e.target.classList.contains('modal__button-delivery')) {
    document.querySelector('.modal__delivery').classList.add('modal_visible')
    document.querySelector('.modal__delivery').firstElementChild.classList.add('modal-appear')
    scroll({top:0, left: 0, behavior: 'smooth'})
  }
}
export default handlerModal