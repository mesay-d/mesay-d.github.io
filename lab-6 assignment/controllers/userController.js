const User=require('../models/user');
const jwt=require('jsonwebtoken')
const secrete='cs477-online shoping';
exports.login=(req,res,next)=>{
    const user=new User(req.body.username,req.body.password,null).login();
    if(user){
       // res.json({'error':'true'})
        //jwt.sign({username})
    const jwtToken=jwt.sign({username:user.username,role:user.role},secrete)
       res.json({jwtToken})

    }else{
        res.json({'error':'invalid user name and password'})
    }

}
exports.authorize=(req,res,next)=>{
    const authHeader=req.header.authorization;
    if(authHeader){
        // const jwtToken=authHeader.split(' ')[1];
        // jwt.verify(jwtToken,secrete,(err,user)=>{//if it is asycron
        //     if(err){
        //         res.status(403).json({error:"forbidden"})
        //     }else{
        //         next();
        //     }/////////
        // })//////////////////////////////////////////
        
        try{//try 
        const payload=jwt.verify(jwtToken,secrete);
        req.user=payload;
        next();
        }catch(error){
            res.status(403).json({error:"forbidden"})
        }
    }else{
        res.status(401).json({error:"unauthorized"})
    }
}
exports.authorizeAdmin=(req,res,next)=>{
    if(req.user.role==='admin'){
        next();
    }else{
        res.status(401).json({error:"unauthorize"})
    }
}
