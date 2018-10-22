const express = require('express');
const mysql = require('mysql');
var bodyParser  = require("body-parser");  
const app = express()

const listData = require('./src/data/data_index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));  

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '123456',
  port: '3306',
  database: 'test',
});

connection.connect(function(){
  console.log('链接成功')
});

app.get('/question-list', (req, res) => {
  
  connection.query('select * from comment',function(error, results, fields){
    if (error) throw error;
    res.send(results)
      // console.log('The solution is: ', results);
  })
})

app.post('/question-add', (req, res) => {
  console.log('+++++++++++++++++++++++++   question-add  +++++++++++++++++++++++++')
  console.log(req.body)
  var addSql = 'insert into comment(feed_source_txt, feed_source_id, answer_id,feed_source_name,comment_num,good_num,answer_ctnt,question,feed_source_img) values ('+     req.body["feed_source_txt"]+','+req.body["feed_source_id"]+','+req.body["answer_id"]+','+req.body["feed_source_name"]+','+req.body["comment_num"]+','+req.body["good_num"]+','+req.body["answer_ctnt"]+','+req.body["question"]+','+req.body["feed_source_img"]+')'
  console.log(addSql)
  connection.query(addSql,req.body,function(error, results, fields){
    if (error) throw error;
    res.send(results)
  })
})

app.get('/question-delete/:id', (req, res) => {
  console.log(req.query.id)
  var addSql = 'delete from comment where question_id = ' + req.params.id;
  console.log(addSql)
  connection.query(addSql,function(error, results, fields){
    if (error) throw error;
    res.send(results)
  })
})

app.listen(3001, () => console.log('Example app listening on port 3001!'))