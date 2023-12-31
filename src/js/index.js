import { setTheme, switchTheme } from './theme.js'
import { createANewBoard, readFromBoards, updateBoards, readFromTasks, updateLists } from './addNewBoard.js'

import '../css/style.css'
import '../css/navBar.css'
import '../css/main.css'

// Theme Changer
const themeSwitch = document.getElementById('theme-switch')
setTheme(themeSwitch, sun, moon)
themeSwitch.addEventListener('change', (e) => { switchTheme(e.target, sun, moon) })

// rest of the logic
console.log('It is working :)')

const addBoardButton = document.getElementById('add-board-button')
const boardCardsContainer = document.getElementById('board-cards-container')
addBoardButton.addEventListener('click', () => {
    boardCardsContainer.appendChild(createANewBoard('board'))
    console.log(readFromTasks(3, 1));
})