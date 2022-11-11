const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors());

const routes = require("./routes");
app.use(routes);


app.listen(PORT, () => {
  console.log(`server has started on port ${process.env.PORT || 5000}`);
});
