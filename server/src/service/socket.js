const socket = require("socket.io");

module.exports = {
  client: null,
  initialize: function (server) {
    this.client = socket(server, { path: "/socket.io" });
    initializeVideoRoom.apply(this);
  },
};

const initializeVideoRoom = function () {
    try {
      const videoRoom = this.client.of("/video");
  
      videoRoom.on("connection", (socket) => {
        console.log("video chat room connected successfully");
        socket.on("event", (data) => {});
        socket.on("disconnect", (data) => {
          console.log(data);
          console.log("video chat room connection disconnected");
        });
      });
  
      videoRoom.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
      });
    } catch (err) {
      console.error(err);
      return { err, msg: "ERR_INITIALIZE_SOCKET" };
    }
  };
