class CustomMatch {
    Plus = function (plus,x) {
        return x + plus;
    }
    Minus = function (minus,y) {
        return minus - y;
    }
    Multiply = function (multiply,z) {
        return multiply * z;
    }
    Divide = function (divide,h) {
        return divide / h;
    }
}

const Plus = new CustomMatch().Plus(50, 6)
const Minus = new CustomMatch().Minus(Plus, 30)
const Multiply = new CustomMatch().Multiply(Minus, 3)
const Divide = new CustomMatch().Divide(Multiply, 2)

console.log(Divide);
