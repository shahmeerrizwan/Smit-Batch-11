let name = "Muhammad Shahmeer Rizwan";
let age = 19;
let rollNumber = 206;
let education = "Intermediate";
let phoneNumber = `03243217819`;
let bioData = `ASSALAM O ALAIKUM 👋
Hello there ! My name is Muhammad Shahmeer Rizwan, and I'm passionate about the world of web development. Currently 19 years old, I'm a student who attended Aga Khan Higher and Secondary School for my school education and pursued my college education at PECHS Education Foundation Government Science College. My journey into the realm of web development has been exciting and fulfilling, as I continue to explore and enhance my skills in this dynamic field. I believe in the power of technology to shape the future, and I am committed to contributing to it through my work as a web developer. `
let gMail = "shahmeerrizwan921@gmail.com"
let address = "Federal B Area Karachi Pakistan"

document.write(`
<table border="1px">

<tr>
<th>Name  </th>
<th>Age  </th>
<th>Phone Number</th>
<th>Education</th>
<th>Bio Data </th>
<th>Email</th>
<th>Address</th>

</tr>
<tr>
<td>${name}</td>
<td>${age}</td>
<td>${phoneNumber}</td>
<td>${education}</td>
<td>${bioData}</td>
<td>${gMail}</td>
<td>${address}</td>
</tr>

</table>

`
)