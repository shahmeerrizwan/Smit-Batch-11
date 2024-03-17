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





