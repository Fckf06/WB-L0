
const removeDeliveryPoints = (e) => {
  
  if (e.target.classList.contains('modal_del-button')) {
    const item = e.target.closest('div')
    e.preventDefault()
    item.classList.add('list-dissappear')

    setTimeout(() => {
      item.remove()
    }, 100)
  }

}
export default removeDeliveryPoints