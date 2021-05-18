
const mongoose= require('mongoose')

URI=('mongodb+srv://gcruzrios:Grvn240675@clustergcr.o8wwz.mongodb.net/MernDb');

mongoose.connect(URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(db=> console.log('Base de datos Conectada'))
  .catch(error=>console.log(error))


module.exports=mongoose;