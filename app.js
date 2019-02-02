const express  = require('express'),
      mongoose = require('mongoose'),
      app      = express();

//App configuration.
app.set('view engine', 'ejs')

//Shit to add. 
//Add routes to index (landing page)
app.get('/', (req, res) => {
    res.render('landing')
});

//Add routes to page to view your album reviews.
app.get('/albums', (req, res) => {
    res.render('albums/index');
}); 

//Add form to submit an album review
app.get('/albums/new', (req, res) => {
    res.render('albums/new')
});
//Edit an album review

app.listen(3000, () => {
    console.log('Server is started on port 3000');
});