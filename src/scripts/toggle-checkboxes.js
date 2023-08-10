const select_checkbox = document.querySelector('.select-checkbox')
const checkboxes = [...document.querySelectorAll('input[type=checkbox].item-goods__checkbox')]
const delivery_date = document.querySelectorAll('.delivery__date')

const toggleCheckbox = (e, data) => {
  if (e.target.classList.contains('select-checkbox')) {
    for (let k = 0; k < Object.values(data).length; k++) {
      Object.values(data)[k].checked = e.target.checked
    }
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = e.target.checked
    }
    let value = e.target.checked ? '' : 'none'
    for (let j = 0; j < delivery_date.length; j++) {
        delivery_date[j].style.display = value
        Array.from(delivery_date[j].lastElementChild.children).forEach((e) => e.style.display = value)
    }

  } else if (e.target.classList.contains('item-goods__checkbox')) {
    let price = e.target.closest('.item-goods').querySelector('.item-goods__price').classList[1]
    data[price].checked = e.target.checked
    if (!checkboxes.filter(e => e.checked).length) {
      select_checkbox.checked = false
    } else if (checkboxes.length === checkboxes.filter(e => e.checked).length) {
      select_checkbox.checked = true
    } else {
      select_checkbox.checked = false
    }
  }
}
export default toggleCheckbox