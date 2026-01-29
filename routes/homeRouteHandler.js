const homeRouteHandler = (req, res)=>{
    if(req.url=="/"){
        res.write(
            `
            <html> 
            <head>
            <title>
            Home Page
            </title>
            </head>
            <body>
            <h1> Hello , Welcome To Our Project 
            </h1>
            <a href="/register">Click Here To register Yourself</a>
            </body>
            </html>
            `
        )
        return res.end();
    }
};

export default homeRouteHandler;