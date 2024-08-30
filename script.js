// const text = document.createElement('p')

// const qu1 = prompt('Введите имя')
// const qu2 = prompt('Ссылка на картинку')

// text.innerText = qu1

// const body = document.querySelector('body')

// body.append(text)

const qu0 = prompt('Ссылка на картинку1')
const qu1 = prompt('Ссылка на картинку2')
const qu2 = prompt('Введите имя')
const qu3 = prompt('Введите Фамилия')
const qu4 = prompt('Введите возраст')

const box = document.createElement('div')
const imgbox = document.createElement('div2')
const photo = document.createElement('img')
const photo2 = document.createElement('img')
const name = document.createElement('h1')
const surename = document.createElement('h2')
const age = document.createElement('h3')
const btnbox = document.createElement('div3')
const btn1 = document.createElement('button')
const btn2 = document.createElement('button')

box.classList = 'box'
box.style.border = '1px solid black'
box.style.width = '200px'
box.style.margin = '0 auto'
box.style.padding = '20px'

imgbox.classList = 'imgbox'
imgbox.style.display = 'flex'
imgbox.style.gap = '10px'


photo.src = qu1
photo.style.width  = '100px'

photo2.src = qu1
photo2.style.width  = '100px'

name.innerText = qu2
name.style.textAlign = 'center'


surename.innerText = qu3
surename.style.textAlign = 'center'

age.innerText = qu4
age.style.textAlign = 'center'

btnbox.style.display = 'flex'
btnbox.style.justifyContent = 'center'
btnbox.style.gap = '20px'
btn1.innerText = 'YES'
btn2.innerText = 'NO'


const body = document.querySelector('body')



body.append(box)
box.append(imgbox)
imgbox.append(photo)
imgbox.append(photo2)
box.append(name)
box.append(surename)
box.append(age)
box.append(btnbox)
btnbox.append(btn1)
btnbox.append(btn2)
