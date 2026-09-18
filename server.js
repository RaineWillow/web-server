const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const indexRouter = require('./routes/index');

app.use(express.json());
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
