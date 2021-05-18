const {Router} = require('express');
const router=Router();

const EmpleadoCtrl= require('../controllers/Empleado.Controller');
const Auth = require('../helpers/Auth');


router.post('/crear',Auth.verificarToken, EmpleadoCtrl.crear);
router.get('/listar-empleados',Auth.verificarToken, EmpleadoCtrl.listar);
router.get('/listar-empleado/:id',Auth.verificarToken, EmpleadoCtrl.listarId);
router.get('/listar-empleados-jefe/:id',Auth.verificarToken, EmpleadoCtrl.empleadosDeunJefe);

router.put('/actualizar/:id',Auth.verificarToken, EmpleadoCtrl.actualizar);
router.delete('/eliminar/:id',Auth.verificarToken, EmpleadoCtrl.eliminar);

router.get('/buscar/:nombre/:id',Auth.verificarToken, EmpleadoCtrl.buscarEmpleado);


module.exports = router;