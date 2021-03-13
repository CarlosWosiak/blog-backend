const PostService = require('./service');

class PostController {
  async store(req, res) {
    return PostService.createPost(req, res);
  }

  async index(req, res) {
    return PostService.getPosts(req, res);
  }

  async find(req, res) {
    return PostService.getPost(req, res);
  }

  async update(req, res) {
    PostService.updatePost(req, res);
  }

  async delete(req, res) {
    PostService.deletePost(req, res);
  }
}

module.exports = new PostController();
