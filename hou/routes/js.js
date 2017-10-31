var express = require('express');
var router = express.Router();
var mysql=require('mysql')
var connection=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'zcx1812281',
    database:'news'
})
/* GET home page. */
router.get('/list', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    connection.query('SELECT * FROM jgr',function (err, rows, fileds) {
        res.send(rows)
    })
});
router.post('/delete',function (req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    connection.query('DELETE FROM jgr WHERE id='+req.body.id,function (err, rows, fileds) {
        res.send('1')
    })
})
router.post('/add',function (req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    connection.query('INSERT INTO jgr (title,time) VALUES ("'+req.body.a+'","'+req.body.b+'")',function (err, rows, fileds) {
        res.send('1')
    })
})
module.exports = router;
