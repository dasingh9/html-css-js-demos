import Calculator from '../services/calculator.js';

const calculator = new Calculator();

export default class CalculatorController {

    addNumbers(req, res) {

        try {
            let number1 = parseInt(req.query.num1);
            let number2 = parseInt(req.query.num2);
            let sum = calculator.add(number1, number2);

            if (isNaN(sum))
                throw new Error("Invalid number received in the input");

            console.log(sum)
            res.status(200)
            res.json({ result: sum })
        }
        catch (err) {
            res.status(500);
            res.json({ error: err.message })
        }
    }

    multiplyNumbers(req, res) {

        try {
            let number1 = parseInt(req.query.num1);
            let number2 = parseInt(req.query.num2);
            let result = calculator.multiply(number1, number2);

            if (isNaN(result))
                throw new Error("Invalid number received in the input");

            console.log(result)
            res.status(200)
            res.json({ result })
        }
        catch (err) {
            res.status(500);
            res.json({ error: err.message })
        }
    }

}