import cards from '../templates/menu-items.hbs'
import data from '../menu.json'

const markup = data.map(el => cards(el))

const ulRef = document.querySelector('.js-menu')
const bodyRef = document.body
const inputRef = document.querySelector('#theme-switch-toggle')

ulRef.insertAdjacentHTML('beforeend', markup.join(''))


// Dark Modus

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

bodyRef.classList.add(localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'))
inputRef.checked = localStorage.getItem('theme') === Theme.DARK


function changeTheme() {
    if (inputRef.checked) {
        bodyRef.classList.add(Theme.DARK)
        bodyRef.classList.remove(Theme.LIGHT)
        localStorage.setItem('theme', Theme.DARK)
    } else {
        bodyRef.classList.remove(Theme.DARK)
        bodyRef.classList.add(Theme.LIGHT)
        localStorage.setItem('theme', Theme.LIGHT)
    }
}

inputRef.addEventListener('click', changeTheme)