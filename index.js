if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();

// Importing routes
const indexRoutes = require('./routes/index');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use('/', indexRoutes);

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Aplicación corriendo desde el puerto ${app.get('port')}`);
});