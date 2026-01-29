import fs from "fs";
const usersInfoRouteHandler = (req, res) => {
   const userData=[];
   req.on('data',(chunk)=>{
    userData.push(chunk);
   })
   req.on('end',()=>{
    const parshedUserData = Buffer.concat(userData).toString();
    console.log(parshedUserData.split('&')[0].split('=')[1]);
    const fileName = parshedUserData.split('&')[0].split('=')[1];

    fs.writeFileSync(`./Users/${fileName}.txt`,parshedUserData);
    const files = fs.readdirSync("./Users");
    console.log(files);
    files.map((file)=>{
      const fileData= fs.readFileSync(`./Users/${file}`,"utf-8");
      console.log(fileData)
    })
   })

};

export default usersInfoRouteHandler;