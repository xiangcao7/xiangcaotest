function mineReacdFile(path){
    return new Promise((resolve,reject)=>{
        require("fs").readFile(path,(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
mineReacdFile("./resource/context.txt").then(
    value=>{
    console.log(value.toString());
    },reason=>{
    console.log(reason);
    })


//const util = require("util")
//const fs = require("fs")
//let mineReacdFile = util.promisify(fs.readFile)
//mineReacdFile("./resource/context.txt").then(
//value=>{console.log(value.toString())
//},reason=>{console.log(reason)
//})