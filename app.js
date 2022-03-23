function askName() {
    var name = prompt("Enter your name")
    return name
}

function greeting(a) { // parameter
    alert(`Welcome back, ${a}.`)
}

var a = askName()

greeting(a) // argument

