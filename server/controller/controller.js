const schema=require('../model/employee');


exports.create=(req,res)=>{
    if (!req.body) {
        res.status(400).send({message:"Content can not be empty"});
        return;
    }

    let emp =new schema({
                name: req.body.name,
                email:req.body.email,
                gender: req.body.gender,
                status: req.body.status,
            });
            emp.save((err,doc)=>{
                if(err){
                    console.log('error in post data '+err);
                }
                else{
                    res.send(doc);
                }
            })
}

exports.find=(req,res)=>{

}

exports.update=(req,res)=>{

}

exports.delete=(req,res)=>{

}