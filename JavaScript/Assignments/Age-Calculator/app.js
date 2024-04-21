function date() {
    let age = prompt("Enter Your Date Of Birth");
    let date = new Date().getTime();
    let show = new Date(age).getTime();
    let dob = date - show;
    let formula = dob / (1000 * 60 * 60 * 24 * 365)
    document.write(formula.toFixed())
} 
