const uploadFile = require("../../middleware/upload");
var path = require("path");
const fs = require("fs");
var ss = require('socket.io-stream');
const socket = require("../../service/socket");

async function getVideoViaSocket(req, res, next) {
  try {
    const { fileName } = req.params;
    if (!fileName) {
      res.status(500).send("Request Failed no data available");
    }

    const videoPath = path.join(__dirname, `../../uploads/${fileName}`);

    //Emit socket event to the web clients
    //socket.client.of("/video").emit("video-play", stream.pipe(res));
 
    const readStream = fs.createReadStream(videoPath);
    ss(socket.client.of("/video")).emit('video-stream', readStream);
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function upload (req, res) {
  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }
    console.log(req.file)
    res.status(200).send({
      message: "Uploaded the file successfully: " + req.file,
    });
  } catch (err) {
    console.log(err)
    res.status(500).send({
      message: `Could not upload the file: ${req.file}. ${err}`,
    });
  }
};

async function  getListFiles(req, res) {
  const directoryPath = path.join(__dirname, "../../uploads/");
  let baseUrl = directoryPath;

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

async function getVideo (req, res) {
  try {
    const { fileName } = req.params;
    const range = req.headers.range;
    const videoPath = path.join(__dirname, `../../uploads/${fileName}`);
    const videoSize = fs.statSync(videoPath).size
    const chunkSize = 1 * 1e6;
    const start = Number(range.replace(/\D/g, ""))
    const end = Math.min(start + chunkSize, videoSize - 1)
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4"
    }
    res.writeHead(206, headers)
    const stream = fs.createReadStream(videoPath, {
        start,
        end
    })
    stream.pipe(res)
  } catch (err) {
    console.log(err)
    res.status(500).send({
      message: `Could not upload the file: ${req.file}. ${err}`,
    });
  }
};

async function  download(req, res) {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/resources/static/assets/uploads/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

module.exports = {
  upload,
  getListFiles,
  download,
  getVideo,
  getVideoViaSocket
};