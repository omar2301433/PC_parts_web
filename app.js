const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

const productRouter = require("./routes/product");

const product = require("./Data/product");

require("dotenv").config();

const api = process.env.API_URL;


app.use(bodyParser.json());
app.use(morgan("tiny"));

app.use(`${api}/product`, productRouter);

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "shop-user",
  })

  .then(() => {
    console.log("Database connection is ready");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log(`${api}/products`);
  console.log(api);
  console.log("Server is running on port 3000");
});
