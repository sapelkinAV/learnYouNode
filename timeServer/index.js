/**
 * Created by sapelkinav on 02/07/2017.
 */

let net = require('net');

let server = net.createServer(function (socket) {
    let data = new Date();
    socket.end(data.getFullYear().toString() + '-' + Number(data.getMonth() + 1) + '-' + Number(data.getDay() + 1) + ' ' + data.getHours() + ':' + data.getMinutes());

});
server.listen(8000);