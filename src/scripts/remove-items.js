const bucket_amount = document.getElementById('bucket-amount')
const mobile_bucket = document.querySelector('.mobile-buttons__bucket > span')
const missing_amount = document.querySelector('.missing-goods__accordion').firstElementChild
const item_goods = document.getElementsByClassName('item-goods')
const item_missing = document.getElementsByClassName('item-missing')

const removeItem = (e, data) => {
  if (e.target.classList.contains('delete')) {

    if (e.target.closest('.item-goods')) {

      let price = e.target.closest('.item-goods').querySelector('.item-goods__price').classList[1]
      data[price].checked = false
      e.target.closest('.item-goods').classList.add('list-dissappear')
      
      setTimeout(() => {
        e.target.closest('.item-goods').remove()

        if (item_goods.length) {
          bucket_amount.innerText = item_goods.length
          mobile_bucket.innerText = item_goods.length
        } else {
          bucket_amount.style.display = 'none'
          mobile_bucket.style.display = 'none'
        }
      }, 400)

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
      }, 400)
    }
  }
}
export default removeItem