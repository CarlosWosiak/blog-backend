const express = require('express');

const routes = express.Router();
const PostController = require('./controller');
const authentication = require('../../api/authentication');

routes.get('/post', PostController.index);
routes.get('/post/:id', PostController.find);
routes.post('/post', authentication, PostController.store);
routes.put('/post/:id', authentication, PostController.update);
routes.delete('/post/:id', authentication, PostController.delete);

module.exports = routes;
