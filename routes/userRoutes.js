const express = require('express');
const { loginController, registerController, authController, applyDoctorController, getAllNotificationController, deleteAllNotificationController, getAllDoctorsController, bookAppointmentController, userAppointmentsController, bookingAvailabilityController} = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post('/login', loginController);

//REGISTER || POST
router.post('/register', registerController);

//Auth || POST
router.post('/getUserData', authMiddleware, authController);

//Apply Doctor || POST
router.post('/apply-doctor', authMiddleware, applyDoctorController);

//Notification Doctor || POST
router.post('/get-all-notificaation', authMiddleware, getAllNotificationController);

//Notification Doctor || POST
router.post('/delete-all-notificaation', authMiddleware, deleteAllNotificationController);

//Get All Doctors
router.get('/getAllDoctors', authMiddleware, getAllDoctorsController);

//Book Appoitment
router.post('/book-appointment', authMiddleware, bookAppointmentController);

//Booking Availability
router.post('/booking-availability', authMiddleware, bookingAvailabilityController);

//Appointments List
router.get('/user-appointments', authMiddleware, userAppointmentsController);


module.exports = router;