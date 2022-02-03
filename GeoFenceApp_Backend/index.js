const express = require("express");
const PORT = 8000;

const app = express();
const db = require("./Config/dB_config");

app.use("/", require("./Routes/api/index"));

app.listen(PORT, () => {
  console.log("Server is up and running at : ", `http://localhost:${PORT}`);
});
var ip = require("ip");
console.dir(ip.address());
