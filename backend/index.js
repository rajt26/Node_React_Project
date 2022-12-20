const express = require("express");
const verifyToken = require('./middleware/verifyToken');
const cors = require('cors');
const dotenv = require('dotenv');
const UserController = require('./controller/user');
const PostController = require('./controller/post');

require('./db/connection');

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// routes user
app.post('/user/create', UserController.create);
app.get('/user/getAllUsers', UserController.find);
app.put('/user/update', verifyToken, UserController.update);
app.delete('/user/delete', verifyToken, UserController.delete);
app.post('/user/login', UserController.login);


//post
app.post('/post/create', PostController.create);
app.get('/post/getAllPosts', PostController.getPosts);


app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})