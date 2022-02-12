const headerModal = () => {
    const button = document.querySelector('.btn-header')
    const modal = document.querySelector('.header-modal')
    const overlay = document.querySelector('.overlay')
    const headerClose = document.querySelector('.header-modal__close')

    button.addEventListener('click', () => {
        modal.classList.toggle('header-modal')
        overlay.style.display = 'block'

    })

    headerClose.addEventListener('click', () => {
        modal.classList.toggle('header-modal')
        overlay.style.display = 'none'
    })
    overlay.addEventListener('click', () => {
        modal.classList.toggle('header-modal')
        overlay.style.display = 'none'
    })
}


export default headerModal