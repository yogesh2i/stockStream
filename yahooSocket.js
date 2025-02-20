const WebSocket = require('ws');
const url = "wss://streamer.finance.yahoo.com";

function connectToSocket(){
        const connection = new WebSocket(url);
        return connection;

}

module.exports = {connectToSocket};


