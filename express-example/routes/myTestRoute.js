import { Router } from 'express';
var router = Router();

router.get('/test', (req, res) => {
    res.send('Hello World!')
})

router.get('/test2', (req, res) => {
    res.send('Second test')
})

export default router;