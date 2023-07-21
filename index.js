const app = require("./app");
const config = require("./Config/config");
const PORT = config.app.port;
app.listen(PORT, () => {
  console.log(`your server is running at http://localhost:${PORT}`);
});
