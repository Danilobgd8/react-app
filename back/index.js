const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = 4000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.send("Server radi!");
});

app.get("/data", (req, res) => {
  const limit = 10;
  const apiUrl = `https://dknhmgstb7daepfpievifqg7te0vaknw.lambda-url.eu-central-1.on.aws?limit=${limit}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error("error to fetch data:", error);
      res.status(500).json({ error: "error to fetch data" });
    });
});
//---------------------------------------------------------------------------------

app.get("/small-data", (req, res) => {
  const limit = 4;
  const apiUrl = `https://dknhmgstb7daepfpievifqg7te0vaknw.lambda-url.eu-central-1.on.aws?limit=${limit}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error("error to fetch data:", error);
      res.status(500).json({ error: "error to fetch data" });
    });
});
//-----
app.listen(port, () => {
  console.log(`Local server start on ${port}`);
});
//-------------------------------------------------------------
//mozda moze i ovako

//app.get("/:type", (req, res) => {
//  const type = req.params.type;
//  let limit = 10;
//
//  if (type === "small-data") {
//    limit = 4;
//  }
//
//  const apiUrl = `https://dknhmgstb7daepfpievifqg7te0vaknw.lambda-url.eu-central-1.on.aws?limit=${limit}`;
//
//  fetch(apiUrl)
//    .then((response) => response.json())
//    .then((data) => {
//      res.json(data);
//    })
//    .catch((error) => {
//      console.error("error to fetch data:", error);
//      res.status(500).json({ error: "error to fetch data" });
//    });
//});
