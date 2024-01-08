const buttons = document.querySelectorAll(".button")
const display = document.querySelector(".display-result")
const aux = display

buttons.forEach((button)=> {
    button.addEventListener("click", ()=> {
        display.textContent += button.textContent
        switch(button.textContent) {
            case "C" :
                clearDisplay()
                break
            case "=":
                display.textContent = getResult()
                break
        }

    })
})

clearDisplay = () => display.textContent = ""

function getResult() {
    return eval(aux.textContent.replace("=",''))
}