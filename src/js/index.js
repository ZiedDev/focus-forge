import { setTheme, switchTheme } from './theme.js'
import { createModal } from './modal.js'
import { binarySearch } from './binarySearch.js'
import { chooseABoardImage } from './media.js'

import { createBoard, readFromBoards, updateBoards } from './boards.js'
import { createTask, readFromTasks, updateTasks, loadTasks, emptyBoardTip } from './tasks.js';

import '../css/style.css'
import '../css/navBar.css'
import '../css/main.css'
import '../css/modals.css'

// Theme Changer
const themeSwitch = document.getElementById('theme-switch')
setTheme(themeSwitch, sun, moon)
themeSwitch.addEventListener('change', (e) => { switchTheme(e.target, sun, moon) })

const addBoardButton = document.getElementById('add-board-button')
const boardCardsContainer = document.getElementById('board-cards-container')

const addTaskButton = document.getElementById('add-task-button')
const tasksCardsContainer = document.getElementById('tasks-cards-container')

let currentBoard = 0;

// Images
tasksCardsContainer.appendChild(emptyBoardTip('Choose a Board', chooseABoardImage))

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.boards == undefined) localStorage.setItem('boards', '[]')
    if (localStorage.tasks == undefined) localStorage.setItem('tasks', '[]')

    const boards = JSON.parse(localStorage.boards)

    for (let i = 0; i < boards.length; i++) {
        boardCardsContainer.appendChild(createBoard(boards[i].name, boards[i].id, () => {
            loadTasks(boards[i].id, tasksCardsContainer, () => tasksCardsContainer.appendChild(emptyBoardTip('Oops! No tasks here', chooseABoardImage)))

            currentBoard = boards[i].id
        }))
    }
})

// Add Board
addBoardButton.addEventListener('click', () => {
    document.body.appendChild(createModal('Create Board', [{ title: 'Name', type: 'text', id: 'board-name' }], () => {
        const boards = JSON.parse(localStorage.boards)

        const boardName = document.getElementById('board-name').value
        let boardId = Math.floor(Math.random() * 99999)

        if (boardName != '') {
            while (binarySearch(boards, 'id', boardId) == null) boardId = Math.floor(Math.random() * 99999)

            boardCardsContainer.appendChild(createBoard(boards[i].name, boards[i].id, () => {
                loadTasks(boardId, tasksCardsContainer, () => tasksCardsContainer.appendChild(emptyBoardTip('Oops! No tasks here', chooseABoardImage)))

                currentBoard = boardId
            }))

            boards.push({ name: boardName, id: boardId })

            localStorage.boards = JSON.stringify(boards)
        }
    }))
})

// Add Task
addTaskButton.addEventListener('click', () => {
    if (currentBoard != 0) {
        document.body.appendChild(createModal('Create Task', [{ title: 'Name', type: 'text', id: 'task-name' }, { title: 'Description', type: 'text', id: 'task-description' }, { title: 'Due Date ', type: 'date', id: 'task-dueDate' }, { title: 'Priority ', type: 'number', id: 'task-priority' }], () => {
            const tasks = JSON.parse(localStorage.tasks)

            const taskName = document.getElementById('task-name').value
            const taskDescription = document.getElementById('task-description').value
            const taskDueDate = document.getElementById('task-dueDate').value
            const taskPriority = document.getElementById('task-priority').value

            let taskId = Math.floor(Math.random() * 99999)

            if (taskName != '' && taskName != '' && taskDescription != '' && taskDueDate != '' && taskPriority != '') {
                while (binarySearch(tasks, 'id', taskId) == null) taskId = Math.floor(Math.random() * 99999)
                tasksCardsContainer.appendChild(createTask(taskName, taskId))

                tasks.push({ title: taskName, boardId: currentBoard, id: taskId, description: taskDescription, taskDueDate: taskDueDate, taskPriority: taskPriority, taskDone: false })


                localStorage.tasks = JSON.stringify(tasks)
            }
        }))
    }
})