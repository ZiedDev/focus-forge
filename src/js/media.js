import blob_board from '../media/images/blob_board.png'

function parser(DOMString, mimeType) {
    const domParser = new DOMParser()
    let doc = domParser.parseFromString(DOMString, mimeType)
    return doc.documentElement
}

const checkSVG = parser('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M176.49 95.51a12 12 0 0 1 0 17l-56 56a12 12 0 0 1-17 0l-24-24a12 12 0 1 1 17-17L112 143l47.51-47.52a12 12 0 0 1 16.98.03M236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84"/></svg>', 'image/svg+xml')
const dottedCircleSVG = parser('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M92.38 38.05A12 12 0 0 1 101 23.42a108 108 0 0 1 54 0a12 12 0 1 1-6 23.23a84.11 84.11 0 0 0-42 0a12 12 0 0 1-14.62-8.6M50.94 52.34a108.1 108.1 0 0 0-27 46.76a12 12 0 0 0 8.37 14.77a12.2 12.2 0 0 0 3.2.43a12 12 0 0 0 11.56-8.8a84 84 0 0 1 21-36.35a12 12 0 1 0-17.13-16.81m-3.88 98.14a12 12 0 0 0-23.12 6.42a108 108 0 0 0 27 46.78A12 12 0 0 0 68 186.85a84 84 0 0 1-20.94-36.37M149 209.35a84 84 0 0 1-42 0a12 12 0 1 0-6 23.23a108 108 0 0 0 54 0a12 12 0 1 0-6-23.23m74.72-67.22A12 12 0 0 0 209 150.5a84 84 0 0 1-21 36.35a12 12 0 0 0 17.12 16.82a108.19 108.19 0 0 0 27-46.77a12 12 0 0 0-8.41-14.77Zm-14.77-36.61a12 12 0 0 0 23.12-6.42a108 108 0 0 0-27-46.78A12 12 0 1 0 188 69.15a84 84 0 0 1 20.94 36.37Z"/></svg>', 'image/svg+xml')

const chooseABoardImage = document.createElement('img')
chooseABoardImage.src = blob_board

export { checkSVG, dottedCircleSVG, chooseABoardImage }