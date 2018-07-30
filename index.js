const keys = require('./config/keys');
const express=require('express');
require('./models/user'); 
require('./services/passport');
const cookieSession = require('cookie-session');
const passport = require('passport');

 const authRoutes = require('./routes/authRoutes');
 const mongoose = require('mongoose');

const app = express();

app.use(
cookieSession({
 maxAge:30*24*60*60*1000,
 keys: [keys.cookieKey]   
})

);

app.use(passport.initialize());
app.use(passport.session());
mongoose.connect(keys.mongoURI,{ useNewUrlParser: true });

authRoutes(app);


const PORT  = process.env.PORT || 5000;
app.listen(PORT);