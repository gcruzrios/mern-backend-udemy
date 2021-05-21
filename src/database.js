
const mongoose= require('mongoose')

URI=(process.env.DB_CNN);

mongoose.connect(URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(db=> console.log('Base de datos Conectada'))
  .catch(error=>console.log(error))


module.exports=mongoose;