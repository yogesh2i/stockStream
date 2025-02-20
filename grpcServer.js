const grpc = require("@grpc/grpc-js");
const protoloader = require("@grpc/proto-loader");
var reflection = require("@grpc/reflection")
const { stockStream } = require("./serviceFunctions");
const PROTO_PATH = __dirname+"/protos/stockLive.proto";

const server = new grpc.Server();
const packageDefinition = protoloader.loadSync(PROTO_PATH);
const stockLive_proto =  grpc.loadPackageDefinition(packageDefinition);
reflection = new reflection.ReflectionService(packageDefinition);

reflection.addToServer(server);
server.addService(stockLive_proto.stockLive.service,{
    stockStream : stockStream
})

module.exports = {server};
