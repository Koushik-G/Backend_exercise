const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

//to set view engine used by the app (explicitly) and location of views for the application.
app.set('view engine', 'ejs');
app.set('views', 'views');

const mainRoutes = require('./routes/main');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes);

app.use(errorController.get404);

app.listen(3000, (err) => {
  if(err){
  console.log(err)
  }
  console.log('server started and running on localhost: 3000');  
});