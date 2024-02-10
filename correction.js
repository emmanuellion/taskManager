const indexPath = "./build/index.html";

const {readFileSync, writeFileSync} = require("fs");

const data = readFileSync(indexPath, 'utf-8');
if(data.indexOf("./static")){
    console.log(data)
    const newData = data.replaceAll('/static', 'static');
    console.log(newData)
    writeFileSync(indexPath, newData, 'utf-8');
}