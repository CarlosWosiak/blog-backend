const express = require('express');

const routes = express.Router();
const PostController = require('./controller');

routes.get('/post', PostController.index);
routes.get('/post/:id', PostController.find);
routes.post('/post', PostController.store);
routes.put('/post/:id', PostController.update);
routes.delete('/post/:id', PostController.delete);

module.exports = routes;
