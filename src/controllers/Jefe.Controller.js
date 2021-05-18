const  JefeCtrl={}
const Jefe=require('../models/Jefe.model')

const bcrypt= require('bcryptjs')
const jwt=require('jsonwebtoken')


JefeCtrl.crearJefe = async(req, res)=>{
    const {nombre, correo, contrasena} = req.body;
    const NuevoJefe = new Jefe({
        nombre, correo, contrasena
    })

    const correojefe = await Jefe.findOne({correo:correo});

    if (correojefe){
        res.json({
            mensaje:'EL correo ya existe'
        })
    }else{
        NuevoJefe.contrasena = await bcrypt.hash(contrasena,10);
        const token = jwt.sign({_id:NuevoJefe._id},'secreto');

        await NuevoJefe.save();

        res.json({
            mensaje:'Bienvenido',
            id:NuevoJefe._id,
            nombre: NuevoJefe.nombre,
            token

        })

    }
}

JefeCtrl.listar = async(req, res)=>{
    const respuesta = await Jefe.find();
    res.json({
       respuesta
    }) 
}

JefeCtrl.login = async(req, res)=>{
    const {correo, contrasena} = req.body;

    const jefe = await Jefe.findOne({correo:correo});

    if(!jefe){
        return res.json({
            mensaje:'Correo Incorrecto'
        })
    }

    const match = await bcrypt.compare(contrasena, jefe.contrasena);

    if(match){
        const token= jwt.sign({id:jefe._id},'secreto')

        res.json ({
            mensaje:'Bienvenido',
            id:jefe._id,
            nombre: jefe.nombre,
            token
        })
    }else{
        res.json({
            mensaje:'Contraseña equivocada'
        })
    }

}

module.exports = JefeCtrl