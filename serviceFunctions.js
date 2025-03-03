const { connectToSocket } = require("./yahooSocket");
const protobuf = require("protobufjs");
const PROTO_PATH = __dirname + "/protos/stockSchema.proto";
const stockSchema_proto = protobuf.loadSync(PROTO_PATH);
const stockSchema = stockSchema_proto.lookup("PricingData");

function stockStream(call) {
  const connection = connectToSocket();

  connection.on("error", (error) => {
    call.write({error: "Failed to connect socket " + error.message,data: ""});
    call.end();
  });

  connection.on("open", () => {
      const data = call.request; //getting stock ticker from user

      connection.send(`{"subscribe":["${data.ticker}"]}`); //sending user ticker to yahoo socket

      //on recieving message from yahoo socket passing it to client
      connection.onmessage = (result) => {
        if(call.cancelled){ //if user cancelled or not listening to stream close the connection
          connection.close();
          call.end();
        }
        let details = stockSchema.decode(Buffer.from(result.data, "base64")).toJSON(); //encoding results on the basis of stockschema proto
        
        if(!details){
          call.write({ error: "Failed to fetch data. Retrying..", data: "" });
        }
        call.write({ error: "", data: details });
      };

      connection.onerror = (err) => {
        call.write({ error: err.message, data: "" });
        connection.close();
        call.end();
      };
  
  });

 
}

module.exports = { stockStream };
