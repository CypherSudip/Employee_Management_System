const express = require('express');
const cors = require('cors');
const mongoose = require('./db');
const routes=require('./routes');

const app = express();
// const router = express.Router();
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
// app.listen(3000,()=> console.log('Server is listening at port 3000'));
// router.use('/employee',routes);




const bodyParser = require('body-parser');
// const app = express();
const port=3000;
// app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})
app.use('/employees',routes);
// 