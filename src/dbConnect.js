const mongoose = require('mongoose');
require('dotenv').config();

const DB_URI = process.env.DB_URI || ''; //env 파일

async function dbConnect() {
   try {
      await mongoose.connect(DB_URI);
      console.log('몽고DB 접속성공');
      await mongoose.connection.db.command({ ping: 1 });
      console.log('몽고DB Ping 테스트 완료');
   } catch (err) {
      console.error('DB접속 실패', err);
   }
}

module.exports = dbConnect;
