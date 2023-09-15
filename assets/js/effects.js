const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ$%^&*_|\/?";
const COMSA_element = document.querySelector("h1.comsa");
function COMSA_shuffle(element, iter_inc = 20) {
    let iterations = 0;
    const interval = setInterval(() => {
        element.innerText = element.innerText.split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return element.dataset.value[index];
                } else {
                    return letters[Math.floor(Math.random() * 26)]
                }
            })
            .join("");
        if (iterations >= element.dataset.value.length) {
            clearInterval(interval);
        }
        iterations += 1 / iter_inc;
    }, 18);
}

setTimeout(() => COMSA_shuffle(COMSA_element), 1250)


// Hacker Effect begins here
document.querySelector("h1").addEventListener('mouseover', (ev) => COMSA_shuffle(ev.target, 6))
// Hacker Effect ends here