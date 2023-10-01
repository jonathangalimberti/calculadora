const displayBox = document.getElementById("displayBox");
const displayBox2 = document.getElementById("displayBox2");

//variables 

let calculo = [];
let display;
let showDisplay;
let ms = 0;
let total = 0;
displayBox.value = "";
displayBox2.value = 0;

//funciones

function resolve() {
    calculo.push(Number(display))

    for (let i = 0; i < calculo.length; i++) {
        if (calculo[i] == "x") {
            total = calculo[i - 1] * calculo[i + 1]
        } else if (calculo[i] == "-") {
            total = calculo[i - 1] - calculo[i + 1]
        } else if (calculo[i] == "/") {
            total = calculo[i - 1] / calculo[i + 1]
        } else if (calculo[i] == "+") {
            total = calculo[i - 1] + calculo[i + 1]
        }
    }
    console.log(total)
    displayBox.value = ""
    displayBox2.value = total
    calculo = []
    calculo.push(total)
    display = ""
    showDisplay = ""

}

function printInput(value) {

    if (display != undefined && display != NaN) {
        display += value
        showDisplay += value

    } else {
        display = value
        showDisplay = value
    }
    displayBox.value = showDisplay

}

function operations(value) {
    if (calculo.length >= 2) {
        resolve()
        calculo.push(value)
    } else {
        switch (value) {
            case "+":
                if (display != 0) {
                    calculo.push(Number(display));
                }
                calculo.push(value)
                display = 0;
                break;
            case "-":
                if (display != 0) {
                    calculo.push(Number(display));
                }
                calculo.push(value)
                display = 0;
                break;
            case "x":
                if (display != 0) {
                    calculo.push(Number(display));
                }
                calculo.push(value)
                display = 0;
                break;
            case "/":
                if (display != 0) {
                    calculo.push(Number(display));
                }
                calculo.push(value)
                display = 0;
                break;
            default:
                break;
        }
    }
    showDisplay += value
    displayBox.value = showDisplay
    displayBox2.value = total
    console.log(calculo)
}

function mc() {
    ms = 0
}

function mr() {
    displayBox.value = ms

}

function addMs() {
    displayBox2.value = Number(display) + ms
}
function subsMs() {
    displayBox2.value = Number(display) - ms
}

function memorySave() {
    ms = Number(displayBox2.value)
}

function square() {
    value = parseFloat(display)
    total = value * value;
    displayBox2.value = total;
}

function tenPow() {
    value = parseFloat(display)
    total = Math.pow(10, value)
    displayBox2.value = total;
}

function sin() {
    value = parseFloat(display)
    total = Math.asin(value)
    displayBox2.value = total;
}

function cos() {
    value = parseFloat(display)
    total = Math.acos(value)
    displayBox2.value = total;
}

function tan() {
    value = parseFloat(display)
    total = Math.tan(value)
    displayBox2.value = total;
}

function cubicSquare() {
    value = parseFloat(display)
    total = Math.pow(value, 3)
    displayBox2.value = total;
}

function inverseNumber() {
    value = parseFloat(display)
    total = Math.pow(value, -1)
    displayBox2.value = total;
}

function sqrt() {
    value = parseFloat(display)
    total = Math.sqrt(value)
    displayBox2.value = total;
}

function e() {
    displayBox.value = "e";
    calculo.push(Math.E)
}

function clearDisplay() {
    display = 0
    displayBox.value = display
}

function clearOperation() {
    display = ""
    showDisplay = ""
    total = 0
    displayBox.value = display
    displayBox2.value = 0
}

function pi() {
    displayBox.value = "π";
    calculo.push(Math.PI)
}

function factorial() {
    value = Number(displayBox.value)
    let factorial = 1;
    for (let i = 2; i <= value; i++) {
        factorial *= i;
    }
    displayBox2.value = factorial;
}

function toggleSign() {
    total = -total;
    displayBox2.value = total
    calculo.splice(0, 1, total)
}