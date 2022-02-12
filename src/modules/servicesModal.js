const servicesModal = () => {
    const servicesButton = document.querySelectorAll('.service-button')
    const servicesModal = document.querySelector('.services-modal')
    const overlay = document.querySelector('.overlay')
    const servicesClose = document.querySelector('.services-modal__close')

    servicesButton.forEach((e) => {
        e.addEventListener('click', () => {
            servicesModal.classList.toggle('services-modal')
            overlay.style.display = 'block'
        })
    })

    servicesClose.addEventListener('click', () => {
        servicesModal.classList.toggle('services-modal')
        overlay.style.display = 'none'
    })
    overlay.addEventListener('click', () => {
        servicesModal.classList.add('services-modal')
        overlay.style.display = 'none'
    })

}

export default servicesModal