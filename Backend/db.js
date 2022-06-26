const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/EMPDB', (err)=>{
    if(!err){
        console.log('DB conection successful');
    }
    else{
        console.log('Error in connection '+ err);
    }
})
module.exports = mongoose;
