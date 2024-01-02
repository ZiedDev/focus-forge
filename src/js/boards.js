import { binarySearch } from './binarySearch.js'

function createBoard(boardName, boardId, boardOnClickEvent) {
    let board = document.createElement('div')
    board.classList.add('board-card')
    board.id = boardId

    let name = document.createElement('h2')
    name.textContent = boardName
    board.appendChild(name)

    board.addEventListener('click', () => boardOnClickEvent(), console.log('l'))

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

export { createBoard, readFromBoards, updateBoards }