const benefitsSlider = () => {
    const sliderBlock = document.querySelector('.benefits-wrap')
    const slides = document.querySelectorAll('.benefits__item')

    let currentSlide = 3
    let interval



    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide - 2, 'benefits__item-active')
        prevSlide(slides, currentSlide - 1, 'benefits__item-active')
        prevSlide(slides, currentSlide, 'benefits__item-active')
        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 2
        }
        nextSlide(slides, currentSlide - 2, 'benefits__item-active')
        nextSlide(slides, currentSlide - 1, 'benefits__item-active')
        nextSlide(slides, currentSlide, 'benefits__item-active')
    }

    const startSlide = () => {
        interval = setInterval(autoSlide, 2500)
    }

    const stopSlide = () => {
        clearInterval(interval)
    }


    sliderBlock.addEventListener('mouseenter', (event) => {
        if (event.target.matches('.portfolio-btn')) {
            stopSlide()
        }

    }, true)
    sliderBlock.addEventListener('mouseleave', (event) => {
        if (event.target.matches('.portfolio-btn')) {
            startSlide()
        }

    }, true)

    startSlide()
}
export default benefitsSlider