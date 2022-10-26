const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
  // res.send('<p>home page</p>');
  res.sendFile('./4.index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  res.sendFile('./4.about.html', { root: __dirname });
});

// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404 page
app.use((req, res) => {
  res.status(404).sendFile('./4.404.html', { root: __dirname });
});