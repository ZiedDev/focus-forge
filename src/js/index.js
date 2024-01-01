import { setTheme, switchTheme } from './theme.js'
import { createBoard, readFromBoards, updateBoards, readFromTasks, updateLists } from './addNewBoard.js'
import { createModal } from './modal.js'

import '../css/style.css'
import '../css/navBar.css'
import '../css/main.css'
import '../css/modals.css'

// Theme Changer
const themeSwitch = document.getElementById('theme-switch')
setTheme(themeSwitch, sun, moon)
themeSwitch.addEventListener('change', (e) => { switchTheme(e.target, sun, moon) })

// rest of the logic
console.log('It is working :)')

const addBoardButton = document.getElementById('add-board-button')
const boardCardsContainer = document.getElementById('board-cards-container')

addBoardButton.addEventListener('click', () => {
    document.body.appendChild(createModal('Create Board', [{title: 'Board Name', type: 'text', id: 'board-name'}], () => {
        boardCardsContainer.appendChild(createBoard(document.getElementById('board-name').value))
    }))
})