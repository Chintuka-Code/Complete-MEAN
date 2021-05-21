const mongoose = require('mongoose');

const user_schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile_no: { type: Number, required: true },
    gender: { type: String, required: true },
    password: { type: String, require: true },
    avatar: { type: String, require: true },
  },
  { timestamps: true }
);
user_schema.index({ email: 1, mobile_no: 1 }, { unique: true });

module.exports = mongoose.model('user', user_schema);
