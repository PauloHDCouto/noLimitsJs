//1
 alert("Hello World")
//------------------------

//2
let ar = Number(prompt("Declare uma variavel"))
let br = Number(prompt("Declare outra variavel"))
let soma = ar + br
alert(soma)
//========================

//3
 let aza = prompt("Declare uma variavel")
if (!isNaN(aza)) { // para saber se é um numero
  alert("É um número")
}else {
  alert("Não é um número")
}

// ----------------------

//4
let aeee = prompt("Declare uma variavel")
if (isNaN(aeee)) {
  alert("É uma string") ////first model
}else {
  alert("Não é uma string")
}

//4
let aw = "A"
typeof aw === "string" ? alert("É uma string") : alert("Não é uma string") // second model

//4
let i = 2
if (typeof i === "string") {
  alert("É uma string") ////third model
}else {
  alert("Não é uma string")
}

//-----------------------
//5
let au = false
if (typeof au === "boolean") {
  alert("É um booleano") 
}else {
  alert("Não é um booleano")
}
//-----------------------

//6
let ai = Number(prompt("Declare n1"))
let bi = Number(prompt("Declare n2"))
let sub = ai - bi
alert(sub)
//-----------------------

//7
let ay = Number(prompt("Declare n1"))
let by = Number(prompt("Declare n2"))
let multi = ay * by
alert(multi)
//-----------------------

//8
let ac = Number(prompt("Declare n1"))
let bc = Number(prompt("Declare n2"))
let div = ac / bc
alert(div)
//-----------------------

//9
let z = prompt("Declare um numero")
if (z % 2 === 0) {
  alert("É um número par") 
}else {
  alert("Não é um número par")
}
//-----------------------

//10
let a = prompt("Declare um numero")
if (a % 2 === 1) {
  alert("É um número impar") // first
}else {
  alert("Não é um número impar")
}


let b = prompt("Declare um numero")
if (b % 2 != 0) {
  alert("É um número impar") // second
}else {
  alert("Não é um número impar")
}