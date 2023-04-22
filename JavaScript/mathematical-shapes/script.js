// a

function squareDiagonal(side) {

  let diagonal = side * Math.sqrt(2)

  console.log(`The diagonal of the square is: ${diagonal}`)
}

squareDiagonal(9)

// b

function triangleArea(a,b,c) {

  let s = (a + b + c) / 2
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c))

  console.log(`The are of the triangle is: ${area}`)
}

triangleArea(5,6,7)

// c

function circleData(radius) {

  const PI = 3.14159

  let circleArea = PI * radius * radius
  let circleCircumfence = 2 * PI * radius

  console.log(`The are of the circle is: ${circleArea}`)
  console.log(`The circumfence of the circle is: ${circleCircumfence}`)
}

circleData(4)