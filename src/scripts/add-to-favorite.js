

const addToFavorite = (e) => {

  if (e.target.classList.contains('like') && e.target.closest('.item-goods')) {
    
    const item_goods = document.getElementsByClassName('item-goods')
    const item = e.target.closest('.item-goods');

    [...item_goods].forEach((elem) => {
      if (elem === item) e.target.classList.toggle('favorite')
    })

  } else {

    const item_missing = document.getElementsByClassName('item-missing')
    const item = e.target.closest('.item-missing');

    [...item_missing].forEach((elem) => {
      if (elem === item) e.target.classList.toggle('favorite')
    })
  }

}
export default addToFavorite