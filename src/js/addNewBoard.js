import { binarySearch } from './binarySearch.js'

function createBoard(boardName, boardId) {
    let board = document.createElement('div')
    board.classList.add('board-card')
    board.id = boardId

    let name = document.createElement('h2')
    name.textContent = boardName
    board.appendChild(name)

    return board;
}

function readFromBoards(id) {
    if (localStorage.boards == undefined) localStorage.setItem('boards', '[]')

    const boards = JSON.parse(localStorage.boards)

    return binarySearch(boards, 'id', id)[1]
}

function updateBoards(id, key, newValue) {
    if (localStorage.boards == undefined) localStorage.setItem('boards', '[]')

    const boards = JSON.parse(localStorage.boards)

    const index = binarySearch(boards, 'id', id)[0]

    boards[index][key] = newValue

    localStorage.boards = JSON.stringify(boards)
}

function readFromTasks(id, boardId) {
    if (localStorage.tasks == undefined) localStorage.setItem('tasks', '[]')

    const tasks = JSON.parse(localStorage.tasks)

    return binarySearch(tasks, 'id', id, 'boardId', boardId)[1]
}

function updateLists(id, boardId, key, newValue) {
    if (localStorage.tasks == undefined) localStorage.setItem('tasks', '[]')

    const tasks = JSON.parse(localStorage.tasks)

    const index = binarySearch(tasks, 'id', id, 'boardId', boardId)[0]

    tasks[index][key] = newValue

    localStorage.tasks = JSON.stringify(tasks)
}

export { createBoard, readFromBoards, updateBoards, readFromTasks, updateLists }