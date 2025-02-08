const fs=require("fs")

let fileNames=["Index122.js","Index23r.js","Index24r.js"]

// for(i=0;i<fileNames.length;i++){
//     fs.writeFile(`${fileNames[i]}`,"content",(err)=>{
//         if(err){
//             throw err
//         }
//         else{
//             console.log("files created")
//         }
//     })
// }


for(i=0;i<fileNames.length;i++){
    fs.unlink(`${fileNames[i]}`,(err)=>{
        if(err){
            throw err
        }
        else{
            console.log("all files deleted")
        }
    })
}

