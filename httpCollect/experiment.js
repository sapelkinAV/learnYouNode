/**
 * Created by sapelkinav on 02/07/2017.
 */

let http = require('http');

let str = "";
callback = function (response) {

    response.on('data', function (chunk) {
        str += chunk;
    });

    response.on('end', function () {
        console.log(req.data);
        console.log(str);
        // your code here if you want to use the results !
    });
};

let req = http.get(process.argv[2], callback);
