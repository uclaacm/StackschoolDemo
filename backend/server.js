const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false);

mongoose
  .connect(
    'mongodb+srv://jamesw:<password>@app.n7kcunu.mongodb.net/test',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Connected to DB'))
  .catch(console.error);

app.listen(3001, () => console.log('Server listening on port 3001'));

const User = require('./models/users');
const Post = require('./models/post');

//Users endpoints
app.get('/users', async (req, res) => {
  const users = await User.find();

  res.json(users);
});

app.post('/login', async (req, res) => {
  const user = await User.findOne({username: req.body.username});
  if (!user) {
    res.json({ 'error': 'That username doesn\'t exist'})
    return;
  }
  if (user.comparePassword(req.body.password, function(err, isMatch) {
    if (err) throw err;
    if (isMatch) {
      res.json(user);
    } else {
      res.json({ 'error': 'Incorrect password'})
    }
  }));
});

app.post('/users/new', async (req, res) => {
  const dupUser = await User.findOne({username: req.body.username});
  if (dupUser) {
    res.json({ 'error' : 'Duplicate username exists.'})
    return;
  }
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  await user.save();

  res.json(user);
});

app.delete('/users/delete/:_id', async (req, res) => {
  const result = await User.findByIdAndDelete(req.params._id);

  res.json(result);
});

app.put('/users/edit/:_id', async (req, res) => {
  const user = await User.findById(req.params._id);

  user.username = req.body.username;
  user.password = req.body.password;
  user.save();

  res.json(user);
});

//Posts endpoints
app.get('/feed', async (req, res) => {
  const feed = await Post.find();

  res.json(feed);
});

app.post('/feed/new', (req, res) => {
  const post = new Post({
    content: req.body.content,
    user: req.body.user,
    timestamp: Date.now(),
  });

  post.save();

  res.json(post);
});

app.delete('/feed/delete/:_id', async (req, res) => {
  const result = await Post.findByIdAndDelete(req.params._id);

  res.json(result);
});

app.put('/feed/edit/:_id', async (req, res) => {
  const post = await Post.findById(req.params._id);

  post.content = req.body.content;
  post.save();

  res.json(post);
});

app.put('/feed/update/:_id', async (req, res) => {
  const post = await Post.findById(req.params._id);

  post.num_likes++;
  post.save();

  res.json(post);
});

app.get('/feed/:username', async (req, res) => {
  const posts = await Post.find({ user : req.params.username });

  res.json(posts)
})
