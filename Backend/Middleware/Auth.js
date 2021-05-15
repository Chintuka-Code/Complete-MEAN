const jwt = require('jsonwebtoken');

const Auth = (req, res, next) => {
  try {
    const token = req.header('Authorization').split(' ')[1];
    var user = jwt.verify(token, process.env.JWT_KEY);
    req.body.active_user_email = user.email;
    req.body.active_user_id = user.user_id;

    next();
  } catch (error) {
    res.status(404).json({ err: 1, message: error.message, error });
  }
};

module.exports = Auth;
