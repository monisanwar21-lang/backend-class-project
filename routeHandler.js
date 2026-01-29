import homeRouteHandler from "./routes/homeRouteHandler.js";
import registerRouteHandler from "./routes/registerRouteHandler.js";
import usersInfoRouteHandler from "./routes/usersInfoRouteHandler.js";

const routeHandler=(req,res)=>{
    if(req.url=="/"){
        homeRouteHandler(req,res)
    }
    if(req.url=="/register"){
      registerRouteHandler(req,res);
    }
    if(req.url=="/usersInfo" && req.method=="POST"){
      usersInfoRouteHandler(req,res);
    }
}


export default routeHandler;