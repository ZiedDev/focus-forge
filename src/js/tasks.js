import { binarySearch } from './binarySearch.js'
import { checkSVG, dottedCircleSVG } from './media.js'

function createTask(taskName, taskId) {
    const task = document.createElement('div')
    task.classList.add('task-card')
    task.id = taskId

    const name = document.createElement('h2')
    name.textContent = taskName

    const check = document.createElement('div')
    const uncheckedSVG = dottedCircleSVG.cloneNode(true)
    const checkedSVG = checkSVG.cloneNode(true)

    checkedSVG.classList.add('hide')

    check.appendChild(uncheckedSVG)
    check.appendChild(checkedSVG)


    task.appendChild(check)

    check.addEventListener('click', () => taskDone(uncheckedSVG, checkedSVG))

    task.appendChild(name)

    return task;
}

function readFromTasks(id, boardId) {
    if (localStorage.tasks == undefined) localStorage.setItem('tasks', '[]')

    const tasks = JSON.parse(localStorage.tasks)

    return binarySearch(tasks, 'id', id, 'boardId', boardId)[1]
}

function updateTasks(id, boardId, key, newValue) {
    if (localStorage.tasks == undefined) localStorage.setItem('tasks', '[]')

    const tasks = JSON.parse(localStorage.tasks)

    const index = binarySearch(tasks, 'id', id, 'boardId', boardId)[0]

    tasks[index][key] = newValue

    localStorage.tasks = JSON.stringify(tasks)
}

function loadTasks(boardId, tasksCardsContainer) {
    tasksCardsContainer.innerHTML = ''

    const tasks = JSON.parse(localStorage.tasks).filter((task) => task.boardId == boardId)

    for (let i = 0; i < tasks.length; i++) {
        tasksCardsContainer.appendChild(createTask(tasks[i].title, tasks[i].id))
    }
}

function taskDone(unchecked, checked) {
    if (unchecked.classList.contains('hide')) {
        unchecked.classList.remove('hide')
        checked.classList.add('hide')
    } else {
        unchecked.classList.add('hide')
        checked.classList.remove('hide')
    }
}

export { createTask, readFromTasks, updateTasks, loadTasks }