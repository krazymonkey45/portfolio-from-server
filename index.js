const express = require('express')
const app = express()
 
// adding middleware
app.set("view engine", "ejs"); // setting up templating engine

app.use(express.static('./public'));

app.get('/home', function (req, res) {
  res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
  });

  app.get('/interests', function (req, res) {
    res.render('interests');
  });
 
app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})