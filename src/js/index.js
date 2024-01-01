import { setTheme, switchTheme } from './theme.js'
import { createBoard, readFromBoards, updateBoards, readFromTasks, updateLists } from './addNewBoard.js'
import { createModal } from './modal.js'
import { binarySearch } from './binarySearch.js'

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

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.boards == undefined) localStorage.setItem('boards', '[]')
    if (localStorage.tasks == undefined) localStorage.setItem('tasks', '[]')

    const boards = JSON.parse(localStorage.boards)

    for (let i = 0; i < boards.length; i++) {
        boardCardsContainer.appendChild(createBoard(boards[i].name, boards[i].id))
    }
})

addBoardButton.addEventListener('click', () => {
    document.body.appendChild(createModal('Create Board', [{ title: 'Name', type: 'text', id: 'board-name' }], () => {
        const boards = JSON.parse(localStorage.boards)

        const boardName = document.getElementById('board-name').value
        let boardId = Math.floor(Math.random() * 10000)

        if (boardName != '') {
            while (binarySearch(boards, 'id', boardId) == null) boardId = Math.floor(Math.random() * 10000)
            boardCardsContainer.appendChild(createBoard(boardName, boardId))

            boards.push({ name: boardName, id: boardId })

            localStorage.boards = JSON.stringify(boards)
        }
    }))
})