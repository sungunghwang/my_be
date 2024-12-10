const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { mongo } = require('mongoose');
const dbConnect = require('./src/dbConnect');
const indexRouter = require('./src/routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
   cors({
      origin: '*', // 'http://localhost:5173'  또는   ['http://localhost:5173', 'http://localhost:4000'],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      preflightContinue: false, // preflight 요청 처리 방식 변경
      optionsSuccessStatus: 204, // OPTIONS 요청에 대한 성공 상태 코드
   })
);

app.get('/', (req, res) => {
   res.send('이 문구가 브라우저에 출력된다는 것은... DB연결성공 후에 서버연결이 성공했다는 의미이다.');
});

app.use('/api', indexRouter);

const PORT = 3030;
dbConnect()
   .then(() => {
      app.listen(PORT, () => {
         console.log(`서버가 ${PORT} 포트에서 실행되었습니다.`);
      });
   })
   .catch((err) => {
      console.log('서버 연결실패', err);
   });
