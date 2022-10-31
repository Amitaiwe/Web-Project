import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);

import express from 'express';

const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(__dirname));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.redirect('/home');
});

app.get("/home", (req, res) => {//landing page
  res.render('log-in');  
});

app.get("/userPermission", (req, res) => {//admin
  const {uname} = req.query;
  if(!uname){
    alert("error, please enter your User Name")
    res.redirect('/home');
  }
  if(uname == "admin"){
    res.render('admin');
  }
  else{
    res.render('board');
  }
});

app.get("/board", (req, res) => {//game
  res.render('board');
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
