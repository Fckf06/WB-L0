import calculateTotalPrice from "./src/scripts/calculate-total-price.js"
import getDeliveryAmount from "./src/scripts/get-delivery-amount.js"
import gedDeliveryItems from "./src/scripts/get-delivery-items.js"
import getItemPrice from "./src/scripts/get-item-price.js"
import handelerCounter from "./src/scripts/handler-counter.js"
import removeItem from "./src/scripts/remove-items.js"
import "./src/scripts/toggle-accordeons.js"
import toggleAsideNotice from "./src/scripts/toggle-aside-notice.js"
import toggleCheckbox from "./src/scripts/toggle-checkboxes.js"
import handlerModal from "./src/scripts/handler-modal.js"
import handlerModalPayment from "./src/scripts/handler-modal-payment.js"
import handlerModalDelivery from "./src/scripts/handler-modal-delivery.js"
import validateReceiverForm from "./src/scripts/validate-receiver-form.js"
import "./src/scripts/validate-inputs.js"
import removeDeliveryPoints from "./src/scripts/remove-delivery-points.js"
import addToFavorite from "./src/scripts/add-to-favorite.js"
const data = getItemPrice()

document.addEventListener('click', (e) => {
  toggleCheckbox(e, data)
  removeItem(e, data)
  addToFavorite(e)
  gedDeliveryItems(e, data)
  toggleAsideNotice(e)
  handelerCounter(e, data)
  calculateTotalPrice(e, data)
  getDeliveryAmount(e, data)
  handlerModal(e)
  handlerModalPayment(e)
  handlerModalDelivery(e)
  removeDeliveryPoints(e)
  validateReceiverForm(e)
})



