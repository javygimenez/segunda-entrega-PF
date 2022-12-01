const express = require("express");
const routerProducts = require('../routes/routerProducts.js');
const routerCarts = require('../routes/routerCarts.js');
const http = require('http');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', routerProducts);
app.use('/api/carrito', routerCarts);
app.use('*', (req, res) => {
	const path = req.params;
	const method = req.method;
	res.send({ error: -2, descripcion: `ruta '${path[0]}' método '${method}' no implementada` });
});

const httpServer = http.Server(app);

module.exports = httpServer;