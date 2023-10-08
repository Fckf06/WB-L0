import { convertSum, getEndingText } from "./utilits.js"

const total_price = document.querySelector('.calculate__price')
const total_full_price = document.querySelector('.calculate__full-price')
const total_discount = document.querySelector('.calculate__discount').lastElementChild
const total_goods = document.querySelector('.calculate__total').firstElementChild
const order_button = document.querySelector('.aside__button > button')
const order_checkbox = document.querySelector('.aside__checkbox')
const bucket_amount = document.getElementById('bucket-amount')
const mobile_bucket = document.querySelector('.mobile-buttons__bucket > span')

const calculateTotalPrice = (e, data) => {

  if (e.target.classList.contains('counter__del') || e.target.classList.contains('counter__add') ||
      e.target.classList.contains('checkbox') || e.target.classList.contains('delete')) {

    const sum_price = Object.values(data).filter(e => e.checked === true).map(e => e.price).reduce((p,c) => p + c, 0)
    const sum_full_price = Object.values(data).filter(e => e.checked === true).map(e => e.full_price).reduce((p,c) => p + c, 0)
    const discount = sum_full_price - sum_price
    const sum_of_goods = Object.values(data).filter(e => e.checked === true).map(e => e.amount).reduce((p,c) => p + c, 0)
     

    total_price.innerText = convertSum(sum_price, ' ')
    total_full_price.innerText = convertSum(sum_full_price, ' ') + ' сом'
    total_discount.innerText = '−' + convertSum(discount, ' ') + ' сом'
    total_goods.innerText = convertSum(sum_of_goods, ' ') + ' ' + getEndingText(sum_of_goods)

    bucket_amount.innerText = sum_of_goods
    mobile_bucket.innerText = sum_of_goods
    
    if (sum_of_goods === 0) {
      mobile_bucket.style.display = 'none'
      bucket_amount.style.display = 'none'
    } else {
      mobile_bucket.style.display = 'inline-flex'
      bucket_amount.style.display = 'inline-flex'
    }

    if (order_checkbox.checked) {
      order_button.innerText ='Оплатить ' + total_price.innerText + ' сом'
    } else if (!order_checkbox.checked) {
      order_button.innerText ='Заказать'
    }
  }
}
export default calculateTotalPrice