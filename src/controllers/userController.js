const userModel = require('../models/userModel');

const userController = {};

userController.getUserController = async (req, res) => {
   try {
      const findUsers = await userModel.find(); // Mongoose's .find() fetches all users
      return res.status(200).json(findUsers);
   } catch (err) {
      console.error('Error fetching users:', err);
      return res.status(500).json({ message: 'Error fetching users' });
   }
};

userController.insertUserController = async (req, res) => {
   console.log('==============', req.body);

   try {
      const { name, email, nickName } = req.body;
      const newUser = new userModel({ name, email, nickName });
      await newUser.save();

      //res.send('회원가입 성공했어요');
      return res.json({ status: 'ok', data: newUser });
   } catch (err) {
      return res.json({ message: err });
   }
};

module.exports = userController;
