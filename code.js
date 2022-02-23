const main = document.querySelector("main")
const span = document.querySelector(".arrayNumber")
const largest = document.querySelector(".largest")
const smallest = document.querySelector(".smallest")
const input = document.querySelector("form")
const getRandoNumber = (maxNNumber = 100) => Math.floor(Math.random() * maxNNumber)
const numbers = []
const smallestNumber = (number) => {
    return Math.min(...number)
}
const largestNumber = (number) => {
    return Math.max(...number)
}
const inputRandomNumbers = (number) => numbers.push(number)
for(let i=0; i<9; i++){
    inputRandomNumbers(getRandoNumber())
}

const boxNOne=()=> {
    const BN = document.querySelector(".data1")
    BN.textContent = numbers[0]
}
boxNOne()
const boxNTwo=()=> {
    const BN = document.querySelector(".data2")
    BN.textContent = numbers[1]
}
boxNTwo()
const boxNThree=()=> {
    const BN = document.querySelector(".data3")
    BN.textContent = numbers[2]
}
boxNThree()
const boxNFour=()=> {
    const BN = document.querySelector(".data4")
    BN.textContent = numbers[3]
}
boxNFour()
const boxNFive=()=> {
    const BN = document.querySelector(".data5")
    BN.textContent = numbers[4]
}
boxNFive()
const boxNSix=()=> {
    const BN = document.querySelector(".data6")
    BN.textContent = numbers[5]
}
boxNSix()
const boxNSeven=()=> {
    const BN = document.querySelector(".data7")
    BN.textContent = numbers[6]
}
boxNSeven()
const boxNEight=()=> {
    const BN = document.querySelector(".data8")
    BN.textContent = numbers[7]
}
boxNEight()
const boxNNine=()=> {
    const BN = document.querySelector(".data9")
    BN.textContent = numbers[8]
}
boxNNine()

const commandName = 'my-command';

function resetShortcut() {
    browser.commands.reset(commandName);
}

document
.querySelector("td")
.addEventListener("onclick", event => {
        event.preventDefault()
        console.log(event)
    
        }
        )
document.querySelector('#reset').addEventListener('click', resetShortcut);
