const express = require('express');
const app = express();
app.set("view engine", "ejs");
const PORT = process.env.PORT || 3000;

const indexRouter = require('./routes/index');

app.use(express.json());
app.use('/', indexRouter);

app.get("/about", (req, res) => {  res.render("about", { title: "About" });});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
