const buttons = document.querySelectorAll(".button")
const display = document.querySelector(".display-result")

buttons.forEach((button)=> {
    button.addEventListener("click", (item)=> {
        display.textContent += button.textContent
        switch(item.currentTarget.textContent)
        {
            case "AC":
                clearDisplay()
                break
        }       
    })
})

display.addEventListener("change", ()=> {
    console.log(display.textContent)
})


function clearDisplay() {
    display.textContent = ""
}
