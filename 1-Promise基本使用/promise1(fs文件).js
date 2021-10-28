const fs = require("fs")

//回调函数
//fs.readFile("./resource/context.txt",(err,data)=>{
//    if(err) throw err;
//    console.log(data.toString())
//})

//Promise形式
let p = new Promise((resolve,reject)=>{
    fs.readFile("./resource/context.txt",(err,data)=>{
        if(err) reject(err);
        resolve(data)
    })
})

p.then(value=>{console.log(value.toString())},reason=>{console.log(reason)})