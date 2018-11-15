var fs=require("fs");
function promise( file,appendfile){
    let promise1=new Promise((resolve,reject)=>
    {
       fs.readFile(appendfile,function(error,data){
            if(error){
                reject(error);
            }
                resolve(data.toString());
        });
    });
    promise1.then((res)=>{
        fs.appendFile(file,res,function(err_file){
           if(err_file) return console.log(err_file);
        });
    })
     .catch((error)=>{
         console.log(error);
     });
   
}
file='./output.txt';
appendFile='./readfile1.txt';
promise(file,appendFile);
appendFile='./readfile2.txt';
promise(file,appendFile);
appendFile='./readfile3.txt';
promise(file,appendFile);