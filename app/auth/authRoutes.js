const express = require('express');
const router = express.Router();
const { login, register, logout, getCurrentUser } = require('./authController');
const { requireAuth, checkGuest } = require('./authMiddleware');

// Route for user login
router.post('/login', checkGuest, login);

// Route for user registration
router.post('/register', checkGuest, register);

// Route for user logout
router.post('/logout', requireAuth, logout);

// Route for getting the current user
router.get('/current-user', requireAuth, getCurrentUser);

module.exports = router;
