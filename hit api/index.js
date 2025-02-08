const http=require("http")
const fs=require("fs")

const server=http.createServer((req,res)=>{
    res.end("end")
    fs.mkdir("kumar",{recursive:true},(err)=>{
        if(err){
            throw err
        }
        else{
            console.log("folder created")
        }
    })
})

const port=3000
server.listen(port,()=>{
    console.log("server is running")
})