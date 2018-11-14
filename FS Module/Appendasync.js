var fs=require('fs');
function ReadAppend(file,appendFile){
    fs.readFile(appendFile,function(err,data){
        if(err) throw err;
        console.log("file read");
        fs.appendFile(file,data,function(err){
            if(err) throw err;
            console.log('the data was appended to file');

        });

    });
}
file='./writefile.txt';
appendFile='./readfile1.txt';
ReadAppend(file,appendFile);

appendFile='./readfile2.txt';
ReadAppend(file,appendFile);
appendFile='./readfile3.txt';
ReadAppend(file,appendFile);