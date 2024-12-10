const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true, // 이름 필드는 필수
         trim: true, // 공백 제거
      },
      email: {
         type: String,
         required: true, // 이메일 필수
      },
      nickName: {
         type: String,
         required: true, // 비밀번호 필수
      },
   },
   { timestamps: true }
);

const userModel = mongoose.model('User', userSchema, 'member');
module.exports = userModel;
