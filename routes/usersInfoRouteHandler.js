import fs from "fs"

const usersInfoRouteHandler =(req,res)=>{
    const UserData=[];
    req.on('data',(chunk)=>{
        UserData.push(chunk);
    })
    req.on('end',()=>{
        const parsedUserData = Buffer.concat(UserData).toString();
        console.log(parsedUserData.split('&')[0].split('=')[1]);
        const fileName = parsedUserData.split('&')[0].split('=')[1];

        const upperHtml =
        `<html>
            <head>
                <title>
                    Users Info Page
                </title>

            </head>
            <body>
                <h1>
                    Hii, Welcome to our team!!!
                </h1>
                <div>`
        let middleHtml ='';
        const lowerHtml =`

                </div>
            </body>
        </html>`;
        fs.writeFileSync(`./Users/${fileName}.txt`,parsedUserData);
        const files = fs.readdirSync("./Users");
        console.log(files);
        files.map((file)=>{
            const fileData = fs.readFileSync(`./users/${file}`,"utf-8");
            console.log(fileData)
            middleHtml=middleHtml+`
            <div>
            <h1>
             ${fileData.split('&')[0].split('=')[1]}
            </h1>
            <p>
            ${fileData.split('&')[1].split('=')[1]}
            </p>
            </div>
            `
    })
    res.write(upperHtml+middleHtml+lowerHtml);
    return res.end();
    })
};
export default usersInfoRouteHandler;