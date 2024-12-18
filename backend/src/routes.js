const express = require('express');
const router = express.Router();

const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const postController = require('./controllers/postController');
const authenticateToken = require('./middleware/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/user/:id', authenticateToken, userController.getUserById);
router.put('/user/:id', authenticateToken, userController.updateUser);

router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getPostById);
router.post('/posts', authenticateToken, postController.createPost);
router.get('/posts/random', postController.getRandomPosts);

module.exports = router;