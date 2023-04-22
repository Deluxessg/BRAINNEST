const num1 = parseInt(prompt("First number:"))
const num2 = parseInt(prompt("Second number:"))

if (num1 > num2) {
  console.log(`${num1} is bigger than ${num2}`)
} else if (num2 > num1) {
  console.log(`${num2} is bigger than ${num1}`)
} else {
    console.log("The numbers are equal")
}