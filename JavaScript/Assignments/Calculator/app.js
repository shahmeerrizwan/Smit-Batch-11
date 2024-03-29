function btnClick(e) {
    document.getElementById("inp").value += e
}

function eq() {
    var getValue = document.getElementById("inp")
    getValue.value = eval(getValue.value)
}
function clearAll() {
    document.getElementById("inp").value = ""
}
function clearLast() {
    var getValue = document.getElementById("inp")
    getValue.value = getValue.value.slice(0, -1)
}