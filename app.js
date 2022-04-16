const path = require('path');
const fs = require('fs');

const express = require("express");
const app = express();

// set up helmet
const helmet = require("helmet");
app.use(helmet({
    contentSecurityPolicy: false,
}) );


app.use(express.static("public"));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'views'))


// Setting telegramRouter
const telegramrouter = require("./routes/telegramRouter")
app.use("/telegram",telegramrouter)


// Route
app.get("/index2",(req, res,next) => {
    res.render('test',{msg:new Date().toISOString()})
  })


app.listen()