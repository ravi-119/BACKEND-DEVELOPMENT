const fs = require('fs');


console.log('Read Start');

//Asynchronous way fileto read  
fs.readFile('input.txt', function(err, data){

    if (err) {
        console.log('error', err);
        return err;
    }
    console.log('data', data.toString());
    console.log('read end');
    return data;
})
console.log('other stuff');



// synchronous way to read  file
let data = fs.readFileSync('input.txt');
console.log('data', data.toString());
console.log('read end');
console.log('other stuff');





// let fs = require('fs');

// console.log('Read file');
// // Asynchronous way to read file 
// fs.readFile('input.txt', function(err, data){
//     if (err) {
//         console.log('err');
//         return err;
//     }
//     console.log('data', data.toString());
//     return data;

// })
// console.log('END file');
// console.log('other stuff');




// Read > Open + Read 






const buf = new Buffer(1024);

fs.open('input.txt', 'r+', function(err, fd){
    if (err) {
        console.log("error in opening file", err);
    }
    console.log("file open successfully!");

    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){

        if (err) {
            console.log(' error in reading file');    
        }
        console.log('data', bytes);
        console.log('data', buf.slice(0, bytes).toString());
        fs.close(fd, function(err) {
            if (err) {
                console.log('Error in closing file');
            } else {
              console.log('Successfully close file');  
            }
        })
    })
});


// writing file 

fs.writeFile('input.txt', 'hello alan walkaer', function(err){

    if (err) {
        console.log('Error in writing file');
    } else {
        console.log('Successs in writing file');
    }
})


//append to file 

fs.appendFile('input.txt', '____rv119', 'utf-8', function (err) {

    if (err) {
        console.log('error in appending file');
    } else {
      console.log('Successsfully append file');  
    }   
})

// deleting file 

fs.unlink('input.txt', function(err) {
    
    if (err) {
        console.log('Errror in Deleting file');
    } else {
        console.log('successfully daleted file'); 
    }
})

