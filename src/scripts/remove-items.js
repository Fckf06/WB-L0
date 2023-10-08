const missing_amount = document.querySelector('.missing-goods__accordion').firstElementChild
const item_missing = document.getElementsByClassName('item-missing')

const removeItem = (e, data) => {
  if (e.target.classList.contains('delete')) {

    if (e.target.closest('.item-goods')) {

      let price = e.target.closest('.item-goods').querySelector('.item-goods__price').classList[1]
      data[price].checked = false
      e.target.closest('.item-goods').classList.add('list-dissappear')
      
      setTimeout(() => {
        e.target.closest('.item-goods').remove()
      }, 100)

    } else {
      e.target.closest('.item-missing').classList.add('list-dissappear')
      setTimeout(() => {
        e.target.closest('.item-missing').remove()
        if (item_missing.length > 1) {
          missing_amount.innerText = `Отсутствуют · ${item_missing.length} товара`
        } else if (item_missing.length === 1) {
          missing_amount.innerText = `Отсутствуют · ${item_missing.length} товар`
        } else {
          missing_amount.innerText = `Отсутствуют · ${item_missing.length} товаров`
        }
      }, 100)
    }
  }
}
export default removeItem