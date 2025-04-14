// for (var index = 0; index < 5; index++) {
//     document.write("hello world");
// }

// var arr = ["karachi", "lahore", "islamabad", "pindi" , "HYD"]
// var cityName = prompt("Enter city name: ");
// var cityFound = false;
// for (var i = 0; i < arr.length; i++) {
//     if (cityName == arr[i]) {
//         cityFound = true
//         alert("yes this city is one of the cleanest cities");
//         break
//     }
// }
// if (cityFound == false) {
//     alert("city not found")
// }





// initialization
// condition
// inc / dec


// var num = 5
// num = num + 2
// num += 4



// var i;

for (i = 0; i <= 3000; i++) {
    document.write(" NaN" + "<br>")
}

// for(var i=10; i > 0; i--){
//     document.write(i, "<br>")
// }

// for (var i = 1; i <= 10; i++) {
//     document.write(5 + " x " + i + " = " + 5 * i + "<br>")
// }



// var sabzi = ["aloo", "piyaaz", "timatar", "Kheera", "Kaddu"]
// for (var i = sabzi.length - 1; i >= 0; i--){
//     document.write(sabzi[i],"<br>")
// }


// for(var i=1; i<= 100; i++){
//     if(i % 2 == 0){
//         document.write(i,"<br>")
//     }
// }

// for(var i=10; i>0; i--){
//     document.write(i,"<br>")
// }


// var arr = [3, 6, 2, 56, 32, 5, 9, 32];
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > largest ) {
//     largest = arr[i];
//   }
// }
// console.log(largest);





// var arr = []
// var userInp = +prompt("Enter value")
// for (var i = 0; i < userInp; i++) {
//     arr[i] = prompt("Jo bhi value")
// }
// document.write(arr)

// var cities = ["karachi", "lahore", "islamabad", "multan", "peshawar"]
// var userInp = prompt("Enter city name")
// var match = false

// for(var i=0; i<cities.length; i++){
//     if(cities[i] == userInp){
//         match = true
//         alert("City found")
//         break
//     }
// }
// if(match == false){
//     alert("city not found")
// }

// for(var i=0; i<=10; i++){
//     if(i == 5){
//         continue
//     }
//     document.write(i)
// }


// var cars = ["Bmw", "Audi", "Mehran", "Alto", "Fx"]
// var userInp = prompt("Enter car what you want ?")
// var match = "no"

// var firstAlpha = userInp.slice(0,1).toUpperCase()
// var baqiAplha = userInp.slice(1).toLowerCase()
// var merge = firstAlpha + baqiAplha

// for(var i=0; i<cars.length; i++){
//     if(merge == cars[i]){
//         match = "yes"
//         alert(merge+ " car avaliable")
//         break
//     }
// }
// if(match == "no"){
//     alert(merge+ " car not available")
// }


// var str = prompt("Enter any word")
// var firstAlpha = str.slice(0,1).toUpperCase()
// var baqiAplha = str.slice(1).toLowerCase()
// var merge = firstAlpha+ baqiAplha
// document.write(merge)


// for loops nested.

// var arr = ["Saylani", "SMIT", "Bahadurabad"]

// var arr2 = ["abc", "def"]

// for(var i=0; i< arr.length; i++){
//     for(var j=0; j < arr2.length; j++){
//         document.write(arr[i] + "  " + arr2[j] + "<br>")
//     }
// }



// saylani abc
// saylani def

// SMIT abc
// SMIT def

// Bahadurabad abc
// Bahadurabad def



// for(var i=0; i<arr.length; i++){
//     document.write(arr[i]+ " "+ arr2+"<br>")
// }

// for (var i = 1; i <= 100; i = i + 10) {
//     for (var j = i; j < i + 10; j++) {
//         document.write(j + " ")
//     }
//     document.write("<br>")
// }






// var num = 101

// while(num <= 100){
    // document.write(num)
    // num++
    // if(num % 2 == 1){
    //     document.write(num+"<br>")
    // }
    // num++
// }

// var num = 101

// do{
//     document.write(num)
//     num++
// }
// while(num <= 100)












// var a = +prompt("Enter starting number ");
// var b = +prompt("Enter ending number ");
// function count(a, b) {
//     for(var i=a; i<=b; i++) {
//        num = i;
//        console.log(num);
//     }
//     // return num;
// }
// // console.log(count(1, 4));
// count(a, b);




