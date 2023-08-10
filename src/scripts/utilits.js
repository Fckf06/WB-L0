export const convertSum = (num, char) => {
  return num.toFixed(0).split('').reverse().join('').replace(/\d{3}/ig, `$&${char}`).split('').reverse().join('')
}
export const getEndingText = (value) => {
  value = String(value)
  if (value  == 1) {
    return 'товар'
  } else if (value.endsWith(2) || value.endsWith(3) || value.endsWith(4)) {
    return  'товара'
  } else return 'товаров'
}