// pre inc   1-> 2
// post inc  1-> 2
// pre dec   1-> 0
// post dec  1-> 0



// JavaScript Arithmetic Operators:

// The Addition(+) Operator
// The Subtraction(-) Operator
// The Multiplication(*) Operator
// The Division(/) Operator
// The Exponentiation(**) Operator
// The Remainder(%) Operator
// The Increment(++) Operator
// The Decrement(--) Operator


// The increment operator(++) adds 1 from the operand.

// If it is placed after the operand, it returns the value before the increment.

// If it is placed before the operand, it returns the value after the increment.


// var num = 5

// var eq = --num + num-- + num-- + --num + num
//             // 4  +   4   +   3   +    1  +  1

//        document.write(eq)

// var num1 = 2
// var num2 = 3
// var eq = ++num1 + num2++ + num1++ + num2++ + --num2 + num2-- 
//          + --num2 + num2-- + num1++ + ++num1


// document.write(eq)




var num1 = 2
var num2 = 4
var num3 = 5

var eq = num1++ + ++num2 - 2 + --num3 + ++num3 - 10 - --num1
2 + 5 - 2 + 4 + 5 - 10 - 2



    - num1++ + ++num2 + 1 + ++num3 - num3++ - --num3 + 2
    - 2 + 6 + 1 + 6 - 6 - 6 + 2





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
