function createModal(title, inputs, submitButtonBehavior) {
    // declaring all the elements
    const modalContainer = document.createElement('div')
    const modal = document.createElement('div')
    const backdrop = document.createElement('div')
    const modalTitle = document.createElement('h1')
    const submitButton = document.createElement('button')
    modalTitle.textContent = title
    submitButton.textContent = 'submit'

    modalContainer.appendChild(modal)
    modalContainer.appendChild(backdrop)
    modal.appendChild(modalTitle)

    for (let i = 0; i < inputs.length; i++) {
        const inputContainer = document.createElement('div')

        const inputTitle = document.createElement('h2')
        inputTitle.textContent = inputs[i].title

        const input = document.createElement('input')
        input.type = inputs[i].type
        input.id = inputs[i].id

        inputContainer.appendChild(inputTitle)
        inputContainer.appendChild(input)

        modal.appendChild(inputContainer)
    }

    modal.appendChild(submitButton)

    // adding the classes    
    modalContainer.classList.add('modal-container')
    modal.classList.add('modal')
    backdrop.classList.add('backdrop')

    backdrop.addEventListener('click', () => {
        modalContainer.parentNode.removeChild(modalContainer)
    })

    submitButton.addEventListener('click', () => {
        submitButtonBehavior()
        modalContainer.parentNode.removeChild(modalContainer)
    })

    return modalContainer
}

export { createModal }