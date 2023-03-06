const express = require('express');
const { getAllUsersController, getAllDoctorsController, changeAccountStatusController } = require('../controllers/adminCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//Get Method || USERS
router.get('/getAllUsers', authMiddleware, getAllUsersController);

//Get Method || DOCTORS
router.get('/getAllDoctors', authMiddleware, getAllDoctorsController);

//Post Account status
router.post('/changeAccountStatus', authMiddleware, changeAccountStatusController);

module.exports = router;