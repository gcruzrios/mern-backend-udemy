const Auth={}
const jwt=require('jsonwebtoken');

Auth.verificarToken= (req, res, next) =>{

    // Enviar el header Token en headers de las peticiones
    if(!req.headers.token){
        return res.json({
            mensaje:'No estas autorizado'
        })

    }

    const token= req.headers.token;

    if (token ==='null'){
        return res.json({
            mensaje:'No estas autorizado'
        })  
    }

    jwt.verify(token,'secreto', (error, resultado)=>{
        if(error) return res.json({
            mensaje:'No estás autorizado'
        })
        next();
    })

    
}

module.exports = Auth