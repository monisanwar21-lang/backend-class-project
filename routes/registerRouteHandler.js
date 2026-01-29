const registerRouteHandler = (req, res) => {
    res.write(
         `
        <html>
            <head>
                <title>
                    Register Page
                </title>
            </head>
            <body>
                <h1> Registration Form
                </h1>
                <div>
                    <form action="usersInfo" method="POST">
                    <div>
                        <label for="userName" >User Name</label>
                        <input type="text" id="userName" placeholder="Write Your Name" name="userName"></input>
                    </div>
                    <div>
                        <label for="desc" >Description</label>
                        <input type="textarea" id="desc" placeholder="Write Your Description" name="description"></input>
                    </div>
                    <div>
                        <button type="submit"> Submit </button>
                    </div>
                    </form>
                </div>
            </body>
        </html> `

    )
    return res.end();

}

export default registerRouteHandler;