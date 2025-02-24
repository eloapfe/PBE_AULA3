const express = require('express');
const routes = express.Router();

const clientes = require('./controller/controllerclientes')

routes.get('/clientes', clientes.read)
routes.post('/clientes', clientes.create)
routes.put('/clientes/:id', clientes.update)
routes.delete('/clientes/:id', clientes.del)

const comida = require('./controller/controllercomida')

routes.get('/comida', comida.read)
routes.post('/comida', comida.create)
routes.put('/comida/:id', comida.update)
routes.delete('/comida/:id', comida.del)

module.exports = routes