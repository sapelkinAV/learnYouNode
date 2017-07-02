/**
 * Created by sapelkinav on 01/07/2017.
 */

let fs = require('fs');
let path = require('path');

let resultList = [];

module.exports = function (filePath, extension, callbackFunction) {
    fs.readdir(filePath, function (error, fileList) {
        if (error) return callbackFunction(error);

        fileList.forEach(function (el, index) {
            if (path.extname(el) === '.' + extension) {
                resultList.push(el);
            }
        });
        callbackFunction(error, resultList);
    });

};


//Official solulution

// var fs = require('fs')
// var path = require('path')
//
// module.exports = function (dir, filterStr, callback) {
//     fs.readdir(dir, function (err, list) {
//         if (err) {
//             return callback(err)
//         }
//
//         list = list.filter(function (file) {
//             return path.extname(file) === '.' + filterStr
//         })
//
//         callback(null, list)
//     })
// }

