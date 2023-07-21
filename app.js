const express = require("express");
const app = express();
const cors = require("cors");
require("./Config/db");
const userRouter = require("./Routes/user.route");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).send({
    message: "welcome to home page ",
  });
});

app.use("/users", userRouter);

app.use((req, res, next) => {
  res.status(404).send({
    message: "opps.! 404 page not found",
  });
});
app.use((err, req, res, next) => {
  res.status(500).send({
    message: "opps.! there was a server error",
  });
});
module.exports = app;
