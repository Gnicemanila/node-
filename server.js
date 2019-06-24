var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({ port: 8181 });
wss.on('connection',(ws)=>{
    ws.on('message',(message)=>{
        console.log(message)
    })
})


var express = require('express');
var app=express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/*express允许跨域*/
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);
    else  next();
});

app.get('/',function(req,res){
    console.log(req.body);
    res.send('<h2>哈哈</h2>');
})
app.post('/dologin',function(req,res){
    console.log(req.body);
    res.json({
        "errno":0,
        "msg":'登录成功'
    });
})
app.post('/gettoken',function(req,res){
    console.log(req.body);
    res.json({ "errno":0,"token":'gettoken12345678'});
})
app.get('/news',(req,res)=>{
    // console.log(this.msg);
    res.jsonp({ "errno":0,"msg":'获取成功'});

})

app.listen(50,'127.0.0.1',function(){
   console.log('项目启动在50端口')
});