const express = require('express');
const cors = require('cors');
const mongoose = require('./db');
const routes=require('./routes');
const morgan = require('morgan');
const path = require('path');
const app = express();
// const router = express.Router();
app.use(express.json());
// app.use(cors({origin: 'http://localhost:4200'}));
// app.listen(3000,()=> console.log('Server is listening at port 3000'));
// router.use('/employee',routes);




const bodyParser = require('body-parser');
// const app = express();
const port=3000;
// app.use(express.json());

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended:true}));

// View engine
app.set('view engine','ejs');
// app.set('views',path.resolve(__dirname,'views.ejs'))

// load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

// load routers
app.use('/',require('./routes'))

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})
app.use('/employees',routes);
// 