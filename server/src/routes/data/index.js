var express = require("express");

var app = express();

const {  
  upload,
  getListFiles,
  getVideo,
 } = require("./controller");

app.post("/video/upload", upload);

app.get("/videoslist", getListFiles);

app.get("/video/http/stream/:fileName", getVideo);



module.exports = app;
