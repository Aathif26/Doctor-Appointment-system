const express = require('express');
const { getDoctorInfoController, updateProfileController, getDoctorByIdController, doctorAppointmentsController, updateStatusController } = require('../controllers/doctorCtrl');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

//Post Single Doctor Information
router.post('/getDoctorInfo', authMiddleware, getDoctorInfoController);

//Post Update Profile
router.post('/updateProfile', authMiddleware, updateProfileController);

//Post get Single Doctor Information
router.post('/getDoctorById', authMiddleware, getDoctorByIdController);

//Get Appointments
router.get('/doctor-appointments', authMiddleware, doctorAppointmentsController);

//Post Update Status
router.post('/update-status', authMiddleware, updateStatusController);

module.exports = router;