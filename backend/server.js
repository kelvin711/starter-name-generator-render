const express = require('express');
const router = require('./routes');
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 5001;
app.use(cors())

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} `);
});

module.exports = app;
