
const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: "50541",// PORT number here,
  });

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });
  conn.on('end', () => {
    console.log('disconnected from server');
  });

  conn.on("connect", () => {
    conn.write('Name: VIV');
    console.log("connected");
    // conn.write("Move: up");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");


  return conn;
};

module.exports = connect;
