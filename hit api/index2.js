const fs=require("fs");
fs.readdir("Sai",(err,data)=>{

    console.log(data);

    // data.map((val)=>{

    //     fs.stat("Sai/"+val,(err,stats)=>{

    //         if(stats.isDirectory()==true){
    //             fs.rmdir("Sai/"+val,(err)=>{
    //                 if(err){
    //                     console.log(err);
    //                     }
    //                     else{
    //                         console.log("Folder deleted Successfully");      
    //                     }
    //             })
    //         }
    //         else{
    //             fs.unlink("Sai/"+val,(err)=>{
    //                 if(err){
    //                 console.log(err);
    //                 }
    //                 else{
    //                     console.log("File deleted Successfully");
                        
    //                 }
    //             })
    //         }
            
    //     }) 
    // })

})
