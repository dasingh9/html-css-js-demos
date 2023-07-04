import express from 'express';
import cors from "cors";
import testRoute from './routes/myTestRoute.js';
import gamesRoute from './routes/gamesRoute.js';

const app = express();
app.use(cors());
app.use('/', express.static('public'))
app.use('/api', testRoute);
app.use('/api', gamesRoute);

app.listen(3000, function(){
    console.log("I'm actively listening at PORT 3000.............");
})


