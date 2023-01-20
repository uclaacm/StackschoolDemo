const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false);

mongoose
  .connect(
    'mongodb+srv://jamesw:fEEq4PJO8brPiG7V@app.n7kcunu.mongodb.net/test',
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
const UserPost = require('./models/userPost');

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

// TODO: populate feed with the likes from UserPosts joined
app.get('/feed', async (req, res) => {
  const feed = await Post.find()
    .populate(
      'postId'
    );

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


// UserPosts endpoints
// To like/dislike a post
app.post('/feed/like', async (req, res) => {
  const exists = await UserPost.find(
    { user: req.body.username, postId: req.body.postId }
  );
  if (exists.length != 0) { // User has clicked before
    const liked = exists[0].liked;
    const action = await UserPost.updateOne(
      { user: req.body.username, postId: req.body.postId },
      { liked: !liked }
    )
    res.json(action)
    return;
  } else { // User has never clicked before
    const action = new UserPost(
      { user: req.body.username, postId: req.body.postId, liked: true }
    );
    action.save()
    res.json(action)
  }
})

// To get numlikes per post
// TODO: no longer works
app.get('/post/numlikes', async (req, res) => {
  const response = await UserPost.countDocuments(
    { postId : req.body.postId, liked: true },
    function (err, count) {
      res.json(count);
    }
  );
})