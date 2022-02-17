const documents = () => {
    const docOpen = document.querySelectorAll('.document-overlay')
    const docBig = document.querySelector('.document-original--opened')
    const overlay = document.querySelector('.overlay')

    docOpen.forEach((e) => {
        e.addEventListener('click', () => {
            docBig.classList.toggle('document-original')
            overlay.style.display = 'block'
            
        })
        let documentClose = document.querySelector('.document-modal__close')
        documentClose.addEventListener('click', () => {
            docBig.classList.add('document-original')
            overlay.style.display = 'none'
            
        })
    })
    overlay.addEventListener('click', () => {
        docBig.classList.add('document-original')
        overlay.style.display = 'none'
    })
}

export default documents