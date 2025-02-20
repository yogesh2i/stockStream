const grpc = require("@grpc/grpc-js");
const protoloader = require("@grpc/proto-loader");
const { port, ticker } = require("./utils");
const PROTO_PATH = __dirname+"/protos/stockLive.proto";

const packageDefinition = protoloader.loadSync(PROTO_PATH);
const stockLive_proto =  grpc.loadPackageDefinition(packageDefinition).stockLive;
const client = new stockLive_proto(`0.0.0.0:${port}`,grpc.credentials.createInsecure());

function getData(){
        const call = client.stockStream();
        call.write({"ticker":ticker});
        call.on("data",(res)=>{
          console.log(res);
        })
        call.on("end",()=>{
            console.log("Stream ended");
        })
}



getData();