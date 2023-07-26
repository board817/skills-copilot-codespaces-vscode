// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

// Create express application
const app = express();

// Allow cross-origin resource sharing
app.use(cors());

// Parse request body
app.use(bodyParser.json());

// Create comments array
const commentsByPostId = {};

// Get comments by postId
app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

// Post comment to postId
app.post('/posts/:id/comments', (req, res) => {
  // Generate random id
  const commentId = randomBytes(4).toString('hex');

  // Get comment from request body
  const { content } = req.body;

  // Get comments by postId
  const comments = commentsByPostId[req.params.id] || [];

  // Push comment to comments array
  comments.push({ id: commentId, content });

  // Update comments by postId
  commentsByPostId[req.params.id] = comments;

  // Send response
  res.status(201).send(comments);
});

// Listen on port 4001
app.listen(4001, () => {
  console.log('Listening on 4001');
});

