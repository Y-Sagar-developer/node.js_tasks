const fs = require("fs");

// fs.mkdir("sagar",(err)=>{
//     if(err) throw err;
//     console.log("folder is created")
// })

// fs.rm("srineth/sri",{recursive:true},(err)=>{
//     if(err) throw err;
//     console.log("folder delete")
// })

// fs.mkdir("lava/rithik",{recursive:true},(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("nestd foldere is created")
//     }
// })

// fs.readdir("lava",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })

// fs.rename("srineth","pradeep",(err)=>{
//     if(err) throw err
//     console.log("success rename")
// })

// fs.writeFile("pradeep",(err)=>{
//     if(err) throw err
//     console.log("adding")
// })





// fs.mkdir("kusa", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.writeFile("kusa","utf-8", (err) => {
//       if (err) throw err;
//       console.log("file also created");
//     });
//   }
// });



// fs.writeFile("kusa/raju","utf-8", (err) => {
//           if (err) throw err;
//           console.log("file also created");
//         });


// fs.writeFile("file1","hai thi is main file","utf-8",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("file created")
//     }
    
// })

// fs.readFile("file1","utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })

fs.writeFile("pradeep/p1","hai this pradeep child file",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file created")
    }
})