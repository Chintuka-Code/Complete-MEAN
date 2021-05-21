const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var multer = require('multer');

// Models
const USER = require('../Models/user');

// Middleware
const Auth = require('../Middleware/Auth');

// MiddleWare
const auth = require('../MiddleWare/auth');

// config multer
let DIR = './Files';
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        '-' +
        uniqueSuffix +
        '.' +
        file.originalname.split('.')[file.originalname.split('.').length - 1]
    );
  },
});

const uploads = multer({ storage: storage }).single('image');

router.get('/', async (req, res) => {
  res.send('ok');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  res.json({ email, password });
});

router.post('/create-user', uploads, async (req, res) => {
  let { name, email, gender, mobile_no, password } = req.body;
  const avatar = req.file.filename;
  try {
    if (
      !(name && email && gender && mobile_no && password && password.length > 8)
    ) {
      throw new Error(
        `All fields are required name: ${name} , email: ${email} , gender: ${gender} , MobileNo: ${mobile_no} .Password length must be greater then 8 character`
      );
    }
    password = bcrypt.hashSync(password, parseInt(process.env.BCRYPT_SALT));

    let response = await USER.create({
      name,
      email,
      gender,
      mobile_no,
      avatar,
    });
    const token = await jwt.sign(
      { name, email, mobile_no, user_id: response._id },
      process.env.JWT_KEY
    );

    response = response.toObject();
    response['token'] = token;

    res.status(200).json({ err: 0, message: 'User Created', response });
  } catch (error) {
    res.status(404).json({ err: 1, message: error.message, error });
  }
});

router.get('/get-user-profile', Auth, async (req, res) => {
  try {
    const { active_user_email, active_user_id } = req.body;
    res.json({ active_user_email, active_user_id });
  } catch (error) {
    res.status(404).json({ err: 1, message: error.message, error });
  }
});

module.exports = router;
