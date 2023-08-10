
const gedDeliveryItems = (e, data) => {
  if (e.target.classList.contains('item-goods__checkbox') ||
    e.target.classList.contains('delete') && e.target.closest('.item-goods')) { 

    const arrImg = document.querySelectorAll('.delivery__items > div > img')
    const date_2 = document.querySelector('.delivery__notice').previousElementSibling
    const currentSrc = e.target.closest('.item-goods').querySelector('img').src
    const delivery_date = document.querySelectorAll('.delivery__date')

    for (let i = 0; i < arrImg.length; i++) {
      if (currentSrc === arrImg[i].src && !e.target.checked) {
        arrImg[i].closest('div').style.display = 'none'
      } else if (currentSrc === arrImg[i].src) {
        arrImg[i].closest('div').style.display = ''
      }
    }
    for (let i = 0; i < delivery_date.length; i++) {
      if (Array.from(delivery_date[i].lastElementChild.children).find(e => e.style.display !== 'none')) {
        delivery_date[i].style.display = ''
      } else {
        delivery_date[i].style.display = 'none'
      }
    }
    if (data.price_2.amount <= 184) {
      date_2.style.display = 'none'
      date_2.querySelector('span').innerText = ''
    } else if (data.price_2.amount <= 185) {
      date_2.querySelector('span').innerText = ''
    }
  }
}

export default gedDeliveryItems