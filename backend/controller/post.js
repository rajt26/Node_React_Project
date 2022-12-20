const Posts = require('../model/post')
const User = require('../model/user')

module.exports = {

    async create(req, res) {
        try {
            let params = req.body;
            let posts = await Posts.create(params);
            let users = await User.find({});
            users = users.filter((item) => {
                return item.role == "recruiter"
            })
            await Posts.findOneAndUpdate({ _id: posts._id }, {
                assign_user: users[Math.floor(Math.random() * users.length)]._id
            })
            return res.send(posts);
        } catch (error) {
            return res.status(400).json({ error: "error while to add post." });
        }
    },
    async getPosts(req, res) {
        try {
            let posts = await Posts.find().populate('user');
            return res.send(posts);
        } catch (error) {
            return res.status(400).json({ error: "error while to get post." });
        }
    }
}