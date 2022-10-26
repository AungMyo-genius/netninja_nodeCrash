const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose');
const Blog = require('./models/blog')

// express app
const app = express();

// listen for requests
app.listen(3000);

const dbURI = "mongodb+srv://mario:test1234@firstnodeblog.ehhraa3.mongodb.net/firstNodeBlog?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => console.log('connected'))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs')
// app.set('views', 'myviewsfolder') views is default folder

// middleware & static files
app.use(express.static('public'))
app.use(morgan('dev'))

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    })
    blog.save()
    .then(result => {
        res.send(result)
    })
    .catch(err => console.log(err))
})

app.get('/all-blogs', (req, res) => {
    Blog.find()
    .then( result => res.send(result))
    .catch( err => console.log(err))
})

app.get('/single-blog', (req, res) => {
    Blog.findById('6357f6b6da15914bc5d010a8')
    .then( result => res.send(result))
    .catch( err => console.log(err))
})

app.use((req,res,next) => {
    console.log('New request made')
    console.log('host: ', req.hostname)
    console.log('path: ', req.path)
    console.log('method: ', req.method)
    next()
})


app.use((req,res,next) => {
    console.log('in the next middleware`')
    next()
})


app.get('/', (req,res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
      res.render('index', { title: 'Home', blogs });
})

app.get('/about', (req,res) => {
    res.render('about', { title: 'About' });
})

app.get('/blogs/create', (req,res) => {
    res.render('create',{ title: 'Create a new blog'})
})

// 404 page
app.use( (req, res) => {
    res.status(404).render('404', {title: '404'})
})