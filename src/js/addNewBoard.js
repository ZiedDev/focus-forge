function createANewBoard(boardName, boardId) {
    let board = document.createElement('div')
    board.classList.add('board-card')
    // board.id = bookId

    let name = document.createElement('h2')
    name.textContent = boardName
    board.appendChild(name)

    return board;
}

function readFromBoards(id) {
    if (localStorage.boards == undefined) localStorage.setItem('boards', '[]')

    const boards = JSON.parse(localStorage.boards)

    boards.sort((a, b) => a.id - b.id)

    return binarySearch(boards, id)[1]
}

function updateBoards(id, key, newValue) {
    if (localStorage.boards == undefined) localStorage.setItem('boards', '[]')

    const boards = JSON.parse(localStorage.boards)

    boards.sort((a, b) => a.id - b.id)

    const index = binarySearch(boards, id)[0]

    boards[index][key] = newValue

    localStorage.boards = JSON.stringify(boards)
}

function readFromTasks(id, boardId) {
    if (localStorage.tasks == undefined) localStorage.setItem('tasks', '[]')

    const tasks = JSON.parse(localStorage.tasks)

    tasks.sort((a, b) => a.boardId - b.boardId)

    tasks.sort((a, b) => a.id - b.id)

    return binarySearch(tasks, id, boardId)[1]
}

function updateLists(id, boardId, key, newValue) {
    if (localStorage.tasks == undefined) localStorage.setItem('tasks', '[]')

    const tasks = JSON.parse(localStorage.tasks)

    tasks.sort((a, b) => a.boardId - b.boardId)

    tasks.sort((a, b) => a.id - b.id)

    const index = binarySearch(tasks, id, boardId)[0]

    tasks[index][key] = newValue

    localStorage.tasks = JSON.stringify(tasks)
}

function binarySearch(arr,id,boardId=null){/*one liner goes brrrrr*/let start=0;let end=arr.length-1;while(start<end){let mid=parseInt(Math.floor((start+end)/2));if(boardId==null){if(arr[mid].id<id){start=mid+1}else{end=mid}}else{if(arr[mid].boardId<boardId){start=mid+1}else if(arr[mid].boardId>boardId){end=mid}else{if(arr[mid].id<id){start=mid+1}else{end=mid}}}}return [end, arr[end]]}

export { createANewBoard, readFromBoards, updateBoards, readFromTasks, updateLists }