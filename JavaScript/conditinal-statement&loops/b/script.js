function evenOdd(num) {
  if (num % 2 === 0) {
    return `${num} is even`
  } else {
    return `${num} is odd`
  }
}

console.log(evenOdd(33))
console.log(evenOdd(100))