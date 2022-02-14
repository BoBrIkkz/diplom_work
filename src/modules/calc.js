<<<<<<< HEAD
const calc = (price = 1000) => {
    const check = document.querySelector('title')
    if (check.textContent == ('Остекление балконов и лоджий')) {
        const total = document.getElementById('calc-total')
        const square = document.getElementById('calc-input')
        const material = document.getElementById('calc-type-material')
        const type = document.getElementById('calc-type')
        const calcBlock = document.getElementById('calc')

        const countCalc = () => {
            const typeValue = +type.options[type.selectedIndex].value
            const materialValue = +material.options[material.selectedIndex].value
            const squareValue = square.value
            let totalValue = 0

            if (typeValue && materialValue && squareValue) {
                totalValue = price * typeValue * materialValue * squareValue
                total.placeholder = 'Итого: ' + totalValue + ' руб.'
            }
        }

        calcBlock.addEventListener('input', (e) => {
            if (e.target === type || e.target === material ||
                e.target === square) {
                countCalc()
            }
        })

    }
}

export default calc
=======
const calc = (price = 1000) => {
    const check = document.querySelector('title')
    if (check.textContent == ('Остекление балконов и лоджий')) {
        const total = document.getElementById('calc-total')
        const square = document.getElementById('calc-input')
        const material = document.getElementById('calc-type-material')
        const type = document.getElementById('calc-type')
        const calcBlock = document.getElementById('calc')

        const countCalc = () => {
            const typeValue = +type.options[type.selectedIndex].value
            const materialValue = +material.options[material.selectedIndex].value
            const squareValue = square.value
            let totalValue = 0

            if (typeValue && materialValue && squareValue) {
                totalValue = price * typeValue * materialValue * squareValue
                total.placeholder = 'Итого: ' + totalValue + ' руб.'
            }
        }

        calcBlock.addEventListener('input', (e) => {
            if (e.target === type || e.target === material ||
                e.target === square) {
                countCalc()
            }
        })

    }
}

export default calc
>>>>>>> cba92dff4755c8462a6d644616726c8f2a6521ba
// square * value type * value material