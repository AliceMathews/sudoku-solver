const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const morgan = require("morgan");
const server = require("http").createServer(app);

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => [res.json("{hello: world}")]);

server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
