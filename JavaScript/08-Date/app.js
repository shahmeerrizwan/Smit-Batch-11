// var str = '54'
// var convert = parseInt(str)
// var convert = Number(str)
// document.write(typeof(convert))

// var num = 54
// var convert = num.toString()
// document.write(typeof(convert))

// var date = new Date()
// var convert = date.toString().slice(0,3)
// document.write(convert)

// var date = new Date().toString().slice(16,24)
// document.write(date)

// var date = new Date().getTime()
// document.write(date)

// var days = ["sun", "mon", "tues", "wed", "thu", "fri", "sat"]
// var date = new Date().getDay()
// var res = days[date]
// document.write(res)


var date = new Date().getTime()
var dob = new Date('14 aug, 1947').getTime()
var minus = date - dob
var formula = minus / (1000 * 60 * 60 * 24 * 365)


document.write(Math.floor(formula))





// var arr = ["abc", "def", "ghi", "xyz", "abc"]
// var arr2 = arr.lastIndexOf("abc",3)
// var arr2 = arr.indexOf("abc",1)
// document.write(arr2)

// var str = "Rehman"
// var str2 = str.charAt(0)
// document.write(str2)

// var num = 69.1
// var check = Math.ceil(num)
// var check = Math.round(num)
// document.write(check)
// var num = Math.random() * 20
// document.write(num.toFixed(2))


var heads = prompt("Enter player1 name")
var tails = prompt("Enter player2 name")
var toss = Math.random() * 2
var convert = Math.floor(toss)

if (convert == 0) {
    alert(heads + " heads wins")
}
else {
    alert(tails + " tails wins")
}






// var num = 5
// var user = prompt(' enter any integer')


// setInterval(function(){
//     document.write('smit')
// },1000)

// setTimeout(function(){
//     document.write("saylani")
// },4000)

// var interval;

// var num = 0

// function timer() {
//     num++
//     console.log(num)
// }

// interval = setInterval(timer,1000)


// setTimeout(function(){
//     clearInterval(interval)
// },5000)


// var num = 0
// var interval;

// interval = setInterval(function () {
//     num++
//     console.log(num)
// }, 1000)

// setTimeout(function(){
//     clearInterval(interval)
// }, 5000)


var milisec = 0
var seconds = 0
var minutes = 0
var getHtmlmsec = document.getElementById('msec')
var getHtmlsec = document.getElementById('sec')
var getHtmlmin = document.getElementById('min')

setInterval(function(){
    milisec++
    getHtmlmsec.innerHTML = milisec
    if(milisec >= 100){
        seconds++
        getHtmlsec.innerHTML = seconds
        milisec = 0
    }



},10)



