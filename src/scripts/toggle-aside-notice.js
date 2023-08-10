const aside_checkbox = document.querySelector('.aside__checkbox')
const notice = aside_checkbox.closest('div').nextElementSibling

const toggleAsideNotice = (e) => {
  if (e.target === aside_checkbox && e.target.checked) {
    notice.style.display = 'none'
  } else if (e.target === aside_checkbox){
    notice.style.display = ''
  }
}
export default toggleAsideNotice