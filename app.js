// JavaScript Example
class Calculator {
    constructor() {
        this.result = 0;
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    divide(value) {
        if (value !== 0) {
            this.result /= value;
        }
        return this;
    }

    getResult() {
        return this.result;
    }
}

// Usage
const calc = new Calculator();
const result = calc.add(10).multiply(2).subtract(5).getResult();
console.log('Result:', result);
