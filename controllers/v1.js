exports.getWelcomeMessage=(req,res,next)=>{
    try{
        throw new Error();
        res.status(200).send("welcome to version 1a")
    }catch(err){
        next(err);
    }
};