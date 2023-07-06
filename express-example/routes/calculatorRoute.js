import { Router } from 'express';
var router = Router();
import CalculatorController from '../controllers/calculatorController.js';

const calculatorController = new CalculatorController();

router.get('/add', (req, res) => {
    calculatorController.addNumbers(req, res);
});

router.get('/multiply', (req, res) => {
    calculatorController.multiplyNumbers(req, res);
});

/*
router.get('/add', (req, res) => {
    const obj = req.query;
    try {
        //const sum = parseInt(obj.num1) + parseInt(obj.num2);

        console.log('sum', sum);
        if(isNaN(sum))
            throw new Error("Invalid number received in the input");
        res.json({result:sum})
    }
    catch(err) {
        res.status(500);
        res.json({error:err.message})
    }
});
*/
const PI = 3.14;

export default router;