import passport from "passport";

export const passportCall = (strategy) =>{
    return async(req,res,next)=>{
        passport.authenticate(strategy,function(error,user,info){
            if(error) return next(error);
            if(!user){
                req.user = null;
            } 
            req.user = user;
            next();
        })(req,res,next); // Como function(error,user,info) es un callback interno, se le pasan los parametros req,res,next. Poreso debo reinyectarlo.
        // es comun en un middlewere dentro de otro middleware
    }
}


//En passport.config.js : 
// return done(null, false, { message: "Incorrect credentials" });
    // A. null: controlo el error
    // B. false: controlo el usuario
    // C. { message: "Incorrect credentials" } : controlo el mensaje de error

//En passportCall.js:
// ...function(error,user, info){ ....
// A. error: controlo el error
// B. user: controlo el usuario
// C. info: controlo el mensaje de error

//  return res.status(401).json({ status:'error' ,error:info.message });
// A. 401: controlo el status
// B. 'error': controlo el status
// C. info.message: controlo el mensaje de error