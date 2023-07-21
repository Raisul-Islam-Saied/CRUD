const mongoose = require("mongoose");
const config = require("./config");

const URL = config.db.DBURL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("database is connected");
  })
  .catch((error) => {
    console.log("not connected");
    console.log(error.message);
    process.exit(1);
  });
