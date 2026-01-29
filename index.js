import http from "http";
import routeHandler from "./routeHandler.js";

const server = http.createServer(
       (req,res)=>{
        routeHandler(req,res);
       }
)   

server.listen(3000);