const express = require('express');

const path = require('path');
const port = process.env.PORT || 5000;
const app = express();
const data = {
    date: 'november 1st',
    action: 'wirte'
}
let db;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb+srv://my0990:134613@cluster0.uzcnx.mongodb.net/blog?retryWrites=true&w=majority', function(err,client){
    db = client.db('blog');
    app.listen(port, ()=>console.log(`Listening on port ${port}`))
    
});

app.use(express.json());
var cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));


app.get('/',function(req,res){
    res.sendFile(__dirname,'/build/index.html')
})

app.get('/text',function(req,res){
   
    let sendData;
    sendData = {
        data: 'test입니다'
    }
    res.send(sendData)
})

app.post("/write", (req,res) => {
    db.collection('post').insertOne({제목: req.body.title, 내용: req.body.content, _id: req.body._id},function(err,res){
        db.collection('count').updateOne({"a":"b"},{$set:{countNumber: req.body._id + 1}});
    })
    
})

app.get("/list", (req,res) => {
    db.collection('post').find().toArray(function(err,결과){
        console.log(결과);
        res.send(결과)
    })
    
})

app.get("/number", (요청,결과) => {
    db.collection('count').find({"a": "b"}).toArray(function(err,res){
        let data = res[0].countNumber;
        결과.json(res[0].countNumber)
    })
    
    
})