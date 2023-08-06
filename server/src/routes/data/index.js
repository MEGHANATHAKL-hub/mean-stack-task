var express = require("express");

var app = express();

const {  
  upload,
  getListFiles,
  download,
  getVideo,
  getVideoViaSocket
 } = require("./controller");

app.post("/video/upload", upload);

app.get("/videoslist", getListFiles);

app.get("/video/stream/:fileName", getVideo);

app.get("/video/socket/stream/:fileName", getVideoViaSocket);

app.get("/video/download", download);



module.exports = app;
