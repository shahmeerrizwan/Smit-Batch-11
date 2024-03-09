// var num1 = 3
// var num2 = 5

// num1 += 10
// num1 = 13


// num1 -= 5
// num1 = 8

// num2 += 4
// num2 = 9

// num2 -= 10
// num2 = -1

// num1 = num2

// document.write("the value of num1 is "+num1 + "<br>" + " and the value of num2 is "+ num2)

// 8, -1
// -1, -1


// num1 = num1 + 5
// num1 += 5
// document.write(num1)
// var eq = --num1 - --num1 + num2++ + ++num2 + num1++ + ++num1 + num1++ + --num2
//    2    -    1   +   5    +    7   +   1    +    3   +   3    +    6
// document.write(eq)
// var a = 5
// var b = 4
// var eq = a+2 + a-- + b++ + b+10 + b-10 + a+4 + ++b + b++ + a
//        7  +  5  +  4  +  15  +  -5  +  8  +  6  +   6 + 4
// document.write(eq)
// var eq = a++ + a++ + a+2 + b+10 + 10 + a++ + a++ + --b + b-20
//           5  +  6  +  9  +  14  + 10 +  7  +  8  +  3  +   -17



// var id = 1
// var fname = "ali"
// var lname = "abc"
// var roll = "123"
// var ins = "SMIT"

// document.write(ins)




// var arr = [1, "Ali", "abc", "CSC-201", "SMIT"]
// arr.push("saylani","ABCD")

// arr.pop()
// arr.pop()
// arr.pop()

// arr.push("DEFG")

// document.write(arr)

// document.write(`Last name is ${arr[2]} and Institue is ${arr[4]}`)


// var arr = [1, 2, 3, 4, 5, 6, "false", true, 18.2, "Saad"]

// arr.pop()
// arr.pop()
// arr.pop()

// document.write(arr[7])


// var a;
// document.write(a)




// var arr = [1, 0.1, "saad", true];
//         0,  1,    2,    3
// arr[4] = "huzaifa";


// arr.unshift("sdfhsd")
// arr.shift();

// arr.splice(1, 1);

// arr.splice(2, 0, "ali");
// arr.splice(3, 1, "hsdfsl");

// arr.slice()
// var arr2 = arr.slice(1, 3);
// n - 1

// var arr2 = arr.slice(0, 3);

// document.write(arr)
// document.write("<br>",arr2)


// var arr = ["aloo","piyaaz","matar","timatar","abc","def"]
// arr.splice(2,-2)
// document.write(arr)

// var arr1 = arr.slice(1)



// arr.push("keela","saib","phal")

// arr.splice(2,2)

// arr.splice(3,1,"peach")


// arr.splice(0,3)

// arr.splice(2,2,"smit")

// arr.push("kheera","lassan")
// arr.unshift("adrak","kaddu")
// arr.pop()
// arr.pop()
// arr.shift()
// arr.shift()

// document.write(arr, "<br>")

// document.write(arr1)


// array 6 methods

// push("akhir se values daalta hai")
// pop()      akhir se nikalta hai
// shift()    shru se nikalta hai
// unshift("shru se daalta hai")
// slice(startingIndex,n-1) copy karta hai
// splice(startingIndex,how many delete items,"adding new values")

// var str = "my name is khan"
// var str2 = str.slice(0,10)
// document.write(str2)
// document.write(str[4])
// var arr = ["Saad","Ali"]
// document.write(arr[0])


// var str = "PAKISTAN"
// var convert = str.toLowerCase()
// document.write(convert)




var str = "sAYLANI"
// var userInp = prompt("Enter word")
// var firstAplha = userInp[0].toLowerCase()
// var secondAplha = userInp.slice(1).toUpperCase()
// var convert =  firstAplha + secondAplha

// if(convert == str){
//     alert(`han done hai`)
// }
// else{
//     alert(`nikal bhai`)
// }

// Write a program to take two input strings. Using string
// comparison, tell which string is greater than other or if they
// both are equal.

var a = prompt("Enter 1st word")
var b = prompt("Enter 2nd word")

if (a.length == b.length) {
    alert("values are equal")
}
else if (a.length > b.length) {
    alert("value 1 is greater than value 2")
}

else if (a.length < b.length) {
    alert("value 2 is greater than value 1")
}