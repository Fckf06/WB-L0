
const removeDeliveryPoints = (e) => {
  
  if (e.target.classList.contains('modal_del-button')) {
    const item = e.target.closest('div')
    e.preventDefault()
    console.log(item);
    item.classList.add('list-dissappear')

    setTimeout(() => {
      item.remove()
    }, 400)
  }

}
export default removeDeliveryPoints