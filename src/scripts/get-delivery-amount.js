
const getDeliveryAmount = (e, data) => {

  if (e.target.classList.contains('counter__del') || e.target.classList.contains('counter__add')) {

    const counter = e.target.closest('.item-goods__counter').firstElementChild
    let data_price = counter.closest('.item-goods__calculation').children[1].classList[1]
    const arrImg = Array.from(document.querySelectorAll('.delivery__items > div > img'))
    const arrSpecialImg = arrImg.filter(e => e.src.includes('item-2'))
    const currentSrc = e.target.closest('.item-goods').querySelector('img').src
  
    if (data_price === 'price_2' && data[data_price].amount <= 184 && data[data_price].amount > 1 ) {
      arrSpecialImg[1].closest('div').style.display = 'none'
      arrSpecialImg[1].closest('.delivery__date').style.display = 'none'

      arrImg.find(e => e.src === currentSrc).nextElementSibling.innerText = data[data_price].amount
      
    } else if (data_price === 'price_2' && data[data_price].amount > 184 ) {
      arrSpecialImg[1].closest('div').style.display = ''
      arrSpecialImg[1].closest('.delivery__date').style.display = ''
      arrSpecialImg[1].nextElementSibling.innerText = data[data_price].amount - 184 === 1 ? '' : data[data_price].amount - 184

    } else {
      data[data_price].amount > 1 ?
      arrImg.find(e => e.src === currentSrc).nextElementSibling.innerText = data[data_price].amount :
      arrImg.find(e => e.src === currentSrc).nextElementSibling.innerText = ' '
    }
  }
}
export default getDeliveryAmount