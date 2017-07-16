/**
 * Created by sapelkinav on 02/07/2017.
 */
let http = require('http');

http.get(process.argv[2], function (response) {
    response.on("data", function (data) {
        console.log(data.toString());
    });
});


//Oficial solution
var http = require('http')

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error)

