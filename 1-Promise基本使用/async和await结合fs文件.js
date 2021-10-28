/* 
    访问resource中的文件内容
*/
const fs = require("fs");
const util = require("util")
const mineReadFile = util.promisify(fs.readFile)
//fs.readFile("./resource/context.txt",(err, data1) => {
//    if(err) throw err;
//    fs.readFile("./resource/context1.txt",(err, data2) => {
//        if(err) throw err;
//        fs.readFile("./resource/context2.txt",(err, data3) => {
//            if(err) throw err;
//            console.log(data1.toString(),data2.toString(),data3.toString());
//        })
//    })
//})

async function main(){
    let data1 = await mineReadFile("./resource/context.txt")
    let data2 = await mineReadFile("./resource/context1.txt")
    let data3 = await mineReadFile("./resource/context2.txt")
    console.log(data1.toString(),data2.toString(),data3.toString());
}
main()