const p = document.querySelector("p")
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = p.innerText
let iteration = 0

p.addEventListener("mouseenter", function () {

    setInterval(() => {

        const str = text.split('').map((char, index) => {
            if (index < iteration) {
                return char
            }
            return characters.split("")[Math.floor(Math.random() * 53)]
        }).join("")

        p.innerText = str
        iteration += 0.25

        console.log(iteration);
    }, 20);
    
})

