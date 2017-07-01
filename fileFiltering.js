/**
 * Created by sapelkinav on 01/07/2017.
 */

fs = require('fs');
path = require('path');

directoryPath = process.argv[2];
fileExtension = '.' + process.argv[3];


let result = [];

fs.readdir(directoryPath, function (err, list) {
    for (let el of list) {
        if(path.extname(el) === fileExtension){
            result.push(el);
        }

    }
    for (let el of result) {
        console.log(el);
    }


});