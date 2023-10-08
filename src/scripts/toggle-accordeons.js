import { getEndingText } from "./utilits.js"

const missing_list = document.querySelector('.missing-goods__list')
const selected_list = document.querySelector('.selected-goods__list')
const accordion_missing = document.getElementById('accordion-missing')
const accordion_selected = document.getElementById('accordion-selected')
const accordion = accordion_selected.closest('.accordion')
const [input, span, label] = [accordion.children[0], accordion.children[1], accordion.children[2]]

const toggleAccordeon = (e, elem) => {

  if (e.target.classList.contains('accordion__button')){
    const amount = document.querySelector('.calculate__total > div').innerText.split(' ').map((e,i,a) => i === 1 ? e = getEndingText(a[0]): e). join(' ')
    const price = document.querySelector('.calculate__title > div:nth-child(2)').innerHTML
    if (e.target.classList.contains('accordion-show')) {

      e.target.classList.remove('accordion-show')
      e.target.classList.add('accordion-hide')
      elem.classList.remove('list-appear')
      elem.classList.add('list-dissappear')

      if (e.target.closest('.selected-goods__accordion')) {

        setTimeout(() => {
          input.remove()
          label.remove()
          span.remove()
          accordion.insertAdjacentHTML('afterbegin', `<p>${amount} · ${price}</p>`)
          elem.style.display = 'none'
        }, 100)

      } else {
        setTimeout(() => {
          elem.style.display = 'none'
        }, 100)
      }

    } else if (e.target.classList.contains('accordion-hide')) {
      e.target.classList.remove('accordion-hide')
      e.target.classList.add('accordion-show')
      elem.classList.remove('list-dissappear')
      elem.classList.add('list-appear')

      if (e.target.closest('.selected-goods__accordion')) {

        setTimeout(()=> {
          accordion.firstElementChild.remove()
          accordion.prepend(input, span, label)
          elem.style.display = ''
        }, 100)

      }  else {
        setTimeout(() => {
          elem.style.display = ''
        }, 100)
      }
    } else {
      e.target.classList.add('accordion-hide')
      elem.classList.remove('list-appear')
      elem.classList.add('list-dissappear')

      if (e.target.closest('.selected-goods__accordion')) {

        setTimeout(()=> {
          input.remove()
          label.remove()
          span.remove()
          accordion.insertAdjacentHTML('afterbegin', `<p>${amount} · ${price}</p>`)
          elem.style.display = 'none'
        }, 100)
      }  else {
        setTimeout(() => {
          elem.style.display = 'none'
        }, 100)
      }
    }
}
}
accordion_missing.addEventListener('click', (e) => toggleAccordeon(e, missing_list))
accordion_selected.addEventListener('click', (e) => toggleAccordeon(e, selected_list))
