/**
 * Created by sapelkinav on 01/07/2017.
 */

let mymodule = require('./workModule.js');

mymodule(process.argv[2],process.argv[3],function (error, data) {
    data.forEach(function (el) {
        console.log(el);
    })
});


//Official solution

// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]
//
// filterFn(dir, filterStr, function (err, list) {
//     if (err) {
//         return console.error('There was an error:', err)
//     }
//
//     list.forEach(function (file) {
//         console.log(file)
//     })
// });
