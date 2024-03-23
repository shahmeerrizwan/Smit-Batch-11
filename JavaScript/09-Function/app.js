// function abc(){
//     alert("saylani")
// }

// abc()
// abc()
// abc()
// abc()
// abc()
// abc()
// abc()
// abc()

// function table(){
//     for(var i=1; i<=10; i++){
//         document.write(2 + " x "+ i + " = "+ 2*i+ "<br>")
//     }
// }
// table()
// table()
// table()
// table()
// table()

// function sum(a, b){
//     return "saylani"
// }

// document.write(sum(10,5))

// document.write(sum(20,20))


// var a = +prompt("Enter value 1")
// var b = +prompt("Enter value 2")
// var c = prompt("Enter operator")
// var sum;
// function calc(a, b, c) {
//     if (c == '+') {
//         sum = a + b
//     }
//     else if (c == '-') {
//         sum = a - b
//     }
//     else if (c == '*') {
//         sum = a * b
//     }
//     else if (c == '/') {
//         sum = a / b
//     }
//     return sum
// }
// document.write(calc(a,b,c))


// var a = 5
// function add(){
//     a = 8
//     console.log(a) // 8
// }
// add()
// console.log(a) // 5



// function another(){
//     var b = 6
//     console.log(b) // 6
// }
// another()
// console.log(b) // 6



// function print(a, b) {

//     return a + b

// }






// CLASS 2 


// function factorial(a){
//     var num = 1
//     for(var i=2; i<=a; i++){
//         num = num * i
//     }
//     return num
// }
// console.log(factorial(1))

// function foo() {
//     var newText = 'Lorem, ipsum dolor sit amet consectetur ipisicingelitLiberoiustoquosuscipit doloribus, rem similique vero nobis dolorum distinctio veritatis vitae, eos ratione.Porro earum eos necessitatibus sed, nisi delectus.'
//     document.getElementById('para').innerHTML = newText
//     document.getElementById('anc').innerText = ''
// }

function onBulb() {
    var getBulb = document.getElementById('bulb')
    getBulb.src = 'https://static.vecteezy.com/system/resources/previews/030/491/407/non_2x/glowing-electric-light-bulb-with-lightning-inside-3d-rendering-ai-generated-free-photo.jpg'
    getBulb.setAttribute('width', '50%')
}



function offBulb() {
    var getBulb = document.getElementById('bulb')
    getBulb.src = 'https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png'
    getBulb.setAttribute('width', '20%')
}



