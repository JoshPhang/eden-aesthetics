const express = require('express')
const app = express();
const path = require('path')
const PORT = process.env.PORT || 5000


app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.redirect("/home")
});

app.get('/home', (req, res) => {
  res.render("pages/home")
});

app.get('/anya', (req, res) => {
  res.render("pages/anya")
});

app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`)
});
