/**
 * Created by sapelkinav on 02/07/2017.
 */



var http = require('http');
var concat = require('concat-stream');

var urls = [];
var responses = [];
var count = 0;

for (var i = 2; i < process.argv.length; i++) {
    urls.push(process.argv[i]);
}

function readResponse(index) {
    http.get(urls[index], function(response) {
        response.pipe(concat(function(data) {
            responses[index] = data.toString();
            count++;

            if (count == 3) {
                responses.forEach(function(response) {console.log(response);});
            }
        }));
    });
}

for (var i = 0; i < urls.length; i++) {
    readResponse(i);
}

//Official solution
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
    for (var i = 0; i < 3; i++) {
        console.log(results[i])
    }
}

function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err)
            }

            results[index] = data.toString();
            count++;

            if (count === 3) {
                printResults()
            }
        }))
    })
}

for (var i = 0; i < 3; i++) {
    httpGet(i)
}

