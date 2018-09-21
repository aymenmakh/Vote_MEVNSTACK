
var jwt = require('jsonwebtoken');
module.exports.authicate = function (req, res) {
    var header = req.headers.authicate;
    if (header) {
        var token = header.split(' ')[1];
        if (jwt.verify(token, 'secret',
            function (err, result) {
                if (err){
                    res.send(err);
                    console.log("err");}
                else {
                    res.send(result);

                }
            }
        ));

    }

    }