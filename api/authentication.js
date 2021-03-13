const routeChecker = (req, res, next) => {
  if (req.headers.authentication !== process.env.KEY) {
    return res.status(401).send({ message: 'Unauthorized' });
  }
  return next();
};

module.exports = routeChecker;
