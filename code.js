const arrayDiv = document.querySelector("h3")
function getRandomNumber(maxNumber = 100) {
    return Math.floor(Math.random() * maxNumber + 1)
}
const arrayNumbers = []
let largestNumber = ""
let smallestNumber = Number.POSITIVE_INFINITY
const inputNumber = (number) => arrayNumbers.push(number)
function randomNumber(){
for(let index = 0; index < 9; index += 1){
    inputNumber(getRandomNumber())
}
}
randomNumber()
for (let i = 0; i < arrayNumbers.length; i++){
    let number = arrayNumbers[i];
    if(number > largestNumber){
      largestNumber = number.toString();
    }
}
for (let i = 0; i < arrayNumbers.length; i++){
    let number = arrayNumbers[i];
    if(number < smallestNumber){
    smallestNumber = number.toString();
    }
}
function displayNumber(number){
    arrayDiv.innerHTML = number
}
displayNumber(arrayNumbers)

document
.querySelector("#smallOrLarge")
.addEventListener("submit", event =>{
    event.preventDefault()
    const form = event.target
    const playerAnswer = form.elements.answer.value.toString()

    if(playerAnswer === largestNumber){
    const correctAnswer = document.createElement("h1")
    correctAnswer.innerHTML = "CORRECT!!!"
    document.body.append(correctAnswer)
}else{
    const wrongAnswer = document.createElement("h1")
    wrongAnswer.innerHTML = "WRONG!!!"
    document.body.append(wrongAnswer)
}
form.reset()
})
randomNumber()

console.log(largestNumber)
console.log(smallestNumber)