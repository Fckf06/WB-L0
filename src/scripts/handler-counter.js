import { convertSum } from "./utilits.js"

const handelerCounter = (e, data) => {

  if (e.target.classList.contains('counter__del') || e.target.classList.contains('counter__add')) {
    let counter = e.target.closest('div')
    let add = counter.children[2]
    let del = counter.children[0]
    let amount = counter.querySelector('span')
    let rest = counter.closest('.item-goods__counter').children[1].innerText

    let discount_price = counter.closest('.item-goods__calculation').children[1].firstElementChild
    let full_price = counter.closest('.item-goods__calculation').children[1].children[1]
    let data_price = counter.closest('.item-goods__calculation').children[1].classList[1]

    let one_item_price =  Number(data[data_price].price) / Number(amount.innerText);
    let one_item_full_price =  Number(data[data_price].full_price) / Number(amount.innerText);

    if (e.target.classList.contains('counter__del')) {

      if (Number(amount.innerText) > 1) {
        data[data_price].amount -= 1
        data[data_price].price -= one_item_price
        data[data_price].full_price -= one_item_full_price
        amount.innerText = data[data_price].amount

        discount_price.innerText =  convertSum(Number(data[data_price].price), ' ')
        discount_price.innerHTML = discount_price.innerText + ' <span>сом</span>'
        full_price.innerText = convertSum(Number(data[data_price].full_price), ' ') + ' сом'
        
        if (Number(amount.innerText) === 1 && Number(rest.match(/\d+/g)?.join('')) > Number(amount.innerText) || Number(amount.innerText) === 1) {
          del.classList.add('limit-button')
          add.classList.remove('limit-button')
        }
      }
    } else {

      if (Number(amount.innerText) < Number(rest.match(/\d+/g)?.join('')) || !rest) {

        data[data_price].price += one_item_price
        data[data_price].full_price += one_item_full_price
        data[data_price].amount += 1
        amount.innerText = data[data_price].amount;

        discount_price.innerText = convertSum(Number(data[data_price].price), ' ')
        discount_price.innerHTML = discount_price.innerText + ' <span>сом</span>'
        full_price.innerText = convertSum(Number(data[data_price].full_price), ' ')  + ' сом'

        if (rest) {
          add.classList.add('limit-button')
          del.classList.remove('limit-button')
        } else  del.classList.remove('limit-button')
      }
    }
  }
}
export default handelerCounter
