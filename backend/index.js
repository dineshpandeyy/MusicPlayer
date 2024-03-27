const express = require("express");
const app = express();
const port = 8000;
require("dotenv").config();
const passport = require("passport");
const User = require("./models/User");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
app.use(express.json());
app.use(cors());
 

const mongoose = require("mongoose");
const JwtStrategy = require('passport-jwt').Strategy,
        ExtractJwt = require('passport-jwt').ExtractJwt;

mongoose
    .connect(
        "mongodb+srv://dineshpandey:" +
        process.env.MONGO_PASSWORD +
        "@spotify.uxv9g9i.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
      
    ).then((x) => {
        console.log("Connected to MongoDB!");
    })
    .catch((err) => {
        console.log("Error while connecting to Mongo");
    });

// setup password

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'thisisasecretkey';
opts.issuer = 'accounts.examplesoft.com';
opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));
    

app.get("/", (req,res) => {
    res.send("Hello World!")
});

app.use("/auth", authRoutes);
app.use("/song", songRoutes);



app.listen(port,() => {
    console.log("App is running on port " + port) 
})

