var express = require ("express");
const app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var sqlite3 = require ('sqlite3').verbose();
var DBPATH = 'banco.db';
var db = new sqlite3.Database(DBPATH);

app.use(bodyParser.json());


app.get("/Experiencia", function(req,res){
    var sql = "SELECT * FROM Experiencia"
    db.all(sql,[],(err,rows)=>{
        if(err){
            console.log("Alogo esta errado!")
        }
        res.send(rows)
        console.log(rows)
    });
});

app.get("/Formacao", function(req,res){
    var sql = "SELECT * FROM Formacao"
    db.all(sql,[],(err,rows)=>{
        if(err){
            console.log("Alogo esta errado!")
        }
        res.send(rows)
        console.log(rows)
    });
});

app.get("/Realizacao", function(req,res){
    var sql = "SELECT * FROM Realizacao"
    db.all(sql,[],(err,rows)=>{
        if(err){
            console.log("Alogo esta errado!")
        }
        res.send(rows)
        console.log(rows)
    });
});

app.get("/user", function(req,res){
    var sql = "SELECT * FROM user"
    db.all(sql,[],(err,rows)=>{
        if(err){
            console.log("Alogo esta errado!")
        }
        res.send(rows)
        console.log(rows)
    });
});

app.get("/Sobremim", function(req,res){
    var sql = "SELECT * FROM Sobremim"
    db.all(sql,[],(err,rows)=>{
        if(err){
            console.log("Alogo esta errado!")
        }
        res.send(rows)
        console.log(rows)
    });
});

//Formação, Realizações Sobre mim
app.listen(port, () =>
{
    console.log(`Servidor rodando na porta ${port}`);
})

