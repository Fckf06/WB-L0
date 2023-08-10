
const getItemPrice = () => {

  const data = {}
  const prices = document.querySelectorAll('.item-goods__price')
  const amounts = document.querySelectorAll('.item-goods__counter-items > span')
  
  for (let i = 0; i < prices.length; i++) {
    data[prices[i].classList[1]] = {
      price: +prices[i].children[0].innerText.match(/\d+/g).join(''),
      full_price: +prices[i].children[1].innerText.match(/\d+/g).join(''),
      amount: +amounts[i].innerText,
      checked: true
    }
  }
  return data
}

export default getItemPrice