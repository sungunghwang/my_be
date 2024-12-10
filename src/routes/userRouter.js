const express = require('express');
const {
   getUserController,
   loginController,
   joinController,
   insertUserController,
} = require('../controllers/userController');
const userRouter = express.Router();

userRouter.get('/get', getUserController);
userRouter.post('/insert', insertUserController);
// userRouters.post('/login', loginController);
// userRouters.post('/join', joinController);

module.exports = userRouter;
