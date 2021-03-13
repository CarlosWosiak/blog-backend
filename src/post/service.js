const Post = require('./model');

class PostService {
  async createPost(req, res) {
    try {
      const post = await Post.create(req.body);
      res.status(200).send(post);
    } catch {
      res.status(422).send({ message: 'invalid input' });
    }
  }

  async getPosts(req, res) {
    const posts = await Post.find({});
    res.status(200).send(posts);
  }

  async getPost(req, res) {
    const post = await Post.findOne({ _id: req.params.id });
    if (!post) {
      res.status(404).send({ message: 'Post not found!' });
      return;
    }
    res.status(200).send(post);
  }

  async updatePost(req, res) {
    try {
      const post = await Post.findOneAndUpdate({ _id: req.params.id }, req.body);
      if (!post) {
        res.status(404).send({ message: 'Post not found!' });
        return;
      }
      res.status(204).send();
    } catch {
      res.status(422).send({ message: 'invalid input' });
    }
  }

  async deletePost(req, res) {
    try {
      const post = await Post.deleteOne({ _id: req.params.id });
      if (post.deletedCount === 0) throw Error;
      res.status(204).send();
    } catch {
      res.status(404).send({ error: "Post doesn't exist!" });
    }
  }
}

module.exports = new PostService();
