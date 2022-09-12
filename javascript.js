let num = ''
let opera = null
let num1 = null
let num2 = null
let sum = null

function get_value(x) {
    num = num + x
    document.getElementById('result').innerHTML = num
}

function get_opera(y) {
    if (opera === null) {
        sum = parseInt(num)
    } else {
        num = parseInt(num)
        switch (opera) {
            case '+':
                sum = sum + num
                break
            case '-':
                sum = sum - num
                break
            case '*':
                sum = sum * num
                break
            case '/':
                sum = sum / num
                break
        }
    }
    opera = y
    document.getElementById('result').innerHTML = opera
    num = ''
}

function calculate() {
    num = parseInt(num)
    switch (opera) {
        case '+':
            sum = sum + num
            break
        case '-':
            sum = sum - num
            break
        case '*':
            sum = sum * num
            break
        case '/':
            sum = sum / num
            break
    }
    document.getElementById('result').innerHTML = sum
}

function reset() {
    num = ''
    opera = null
    num1 = null
    num2 = null
    sum = null
    document.getElementById('result').innerHTML = "..."
}
