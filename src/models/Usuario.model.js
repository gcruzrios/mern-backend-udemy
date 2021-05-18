const mongoose=require('mongoose')
const {Schema}=mongoose

const UsuarioSchema = new Schema({
    nombre: String,
    apellidos: String,
    identificacion:String,
    puesto: String,
    tcontrato: String,
    jefe:String
})

module.exports= mongoose.model('usuario', UsuarioSchema);