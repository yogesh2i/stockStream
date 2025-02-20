const grpc = require("@grpc/grpc-js");
const {server}  = require("./grpcServer");


server.bindAsync("0.0.0.0:50050",grpc.ServerCredentials.createInsecure(),(err,port)=>{
    if(err){
     console.log("Failed to create server!"+err.message);
    }else{
     console.log("Service running at :"+port);
    }
 });
