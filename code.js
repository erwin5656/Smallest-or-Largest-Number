const span = document.querySelector(".arrayNumber")
const largest = document.querySelector(".largest")
const smallest = document.querySelector(".smallest")
const input = document.querySelector("form")
let numbers = []

const smallestNumber = (number) => {
    return Math.min(...number)
}
const largestNumber = (number) => {
    return Math.max(...number)
}

document
.querySelector("#inputNumber")
.addEventListener("submit", event => {
    event.preventDefault()
    const numberArray = event.target
    const inputArray = numberArray.elements.number.value
    numbers.push(inputArray)
    span.append(`${inputArray},`)
    largest.replaceChildren(largestNumber(numbers))
    smallest.replaceChildren(smallestNumber(numbers))
    input.reset()

    }
    )
    window.onload = function () {
        document.querySelector("input").onfocus();
    }
