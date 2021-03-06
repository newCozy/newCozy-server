const express = require('express');
const router = express.Router();
const upload = require('../modules/multer');

const UserController = require('../controllers/userController');
const AuthMiddleware = require('../middlewares/auth');

router.post('/checknickname', UserController.checkNickname);

router.post('/checkemail', UserController.checkEmail);

router.post('/signin', UserController.signin);

router.post('/signup', UserController.signup);

router.post('/uploadImage/:bookstoreIdx', upload.array('profile'), UserController.updateImages);

router.post('/findpw', UserController.findPassword);


/* 
    ✔️ update profile
    METHOD : POST
    URI : localhost:3000/user/profile
    REQUEST HEADER : JWT
    REQUEST BODY : ⭐️image file ⭐️
    RESPONSE DATA : user profile
*/
router.post('/profile', AuthMiddleware.checkToken, upload.single('profile'), UserController.updateProfile);//


module.exports = router;