const express = require("express");
var createError = require("http-errors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var apiRouter = require("./routes/index");
var app = express({ caseSensitive: false });
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../static")));
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const fs = require("fs");
const PORT = process.env.PORT || "3000";

// io.on('connection', (socket) => {
//   console.log('A user connected');

//   // Endpoint to stream video using socket.io-stream
//   socket.on('stream-video', (fileName) => {
//     const videoPath = path.join(__dirname, `./uploads/${fileName}`);
//     console.log(videoPath)
//     //const videoPath = path.join(__dirname, 'videos', videoName);

//     fs.stat(videoPath, (err, stats) => {
//       if (err) {
//         console.error(err);
//         return;
//       }

//        const readStream = fs.createReadStream(videoPath);
//        socket.emit('stream-video', readStream); // Emit the video stream using 'socket.io-stream'

//       // const fileStream = fs.createReadStream(videoPath);
//       // fileStream.on('data', (data) => {
//       //   socket.emit('stream-video', data);
//       // });
//       // fileStream.on('end', () => {
//       //   socket.emit('video-stream-end'); // Notify the client that the video stream has ended
//       // });

//     });
//   });

//   socket.on('disconnect', () => {
//     console.log('A user disconnected');
//   });
// });

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('start-stream', (fileName) => {
    const videoPath = path.join(__dirname, `./uploads/${fileName}`);
    const videoData = fs.readFileSync(videoPath);
    socket.emit('video-stream', videoData);
    socket.emit('video-end');
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// var server = require('http').Server(app);
// var io = require('socket.io')(server);

//app.use("/api", apiRouter);

app.get("/", function (req, res, next) {
  let indexFile = path.join(__dirname, "../../static/index.html");
  res.sendFile(indexFile);
});

app.use("/api", apiRouter);


// io.on('connection', (socket) => {
//   console.log("New connection");

//   socket.on('event1', (data)=> {
//     console.log(data.msg);
//   })

//   socket.emit('event2', { msg: 'server to client, do you read me'})

//   socket.on('event3', (data)=> {
//     console.log(data.msg);
//     socket.emit('event4', {msg: 'loud and clear'})
//   })
// })

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // if (process.env.ENV == "production") {
  //   errors.report(err);
  // }
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});


http.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
