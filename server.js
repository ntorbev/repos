const app = require("./backend/app");
const http = require("http");

app.set("port", '3000');

const onListening = () => {
  console.log("Listening on 3000" );
};
const server = http.createServer(app);
server.on("error", console.log);
server.on("listening", onListening);
server.listen('3000');
