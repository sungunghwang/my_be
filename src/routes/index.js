const express = require('express');
const indexRouter = express.Router();
const userRouter = require('./userRouter');
// const productRouter = require('./productRouter');
// const reviewRouter = require('./reviewRouter');

indexRouter.use('/user', userRouter);
// indexRouter.use('/product', productRouter);
// indexRouter.use('/review', reviewRouter);

module.exports = indexRouter;
