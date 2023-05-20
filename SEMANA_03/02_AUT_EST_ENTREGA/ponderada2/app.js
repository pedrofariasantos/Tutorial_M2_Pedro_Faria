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
            throw err
        }
        res.send(rows)
        console.log(rows)
    });
});

app.get('/Formaçao', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Acces-Control-Allow_Origin', '*');
    var db = new sqlite3.Databas(DBPATH);
    var sql = 'SELECT * FROM Formaçao ORDER BY ID COLLATE NOCASE';
        db.all(sql, [], (err,rows) =>{
            if (err) {
                throw err;
            }
           res.json(rows)
        });
        db.close();
});

app.get('/Realizações', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Acces-Control-Allow_Origin', '*');
    var db = new sqlite3.Databas(DBPATH);
    var sql = 'SELECT * FROM Realizações ORDER BY ID COLLATE NOCASE';
        db.all(sql, [], (err,rows) =>{
            if (err) {
                throw err;
            }
           res.json(rows)
        });
        db.close();
});

app.get('/user', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Acces-Control-Allow_Origin', '*');
    var db = new sqlite3.Databas(DBPATH);
    var sql = 'SELECT * FROM user ORDER BY ID COLLATE NOCASE';
        db.all(sql, [], (err,rows) =>{
            if (err) {
                throw err;
            }
           res.json(rows)
        });
        db.close();
});

app.get('/Sobre_mim', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Acces-Control-Allow_Origin', '*');
    var db = new sqlite3.Databas(DBPATH);
    var sql = 'SELECT * FROM Sobre mim ORDER BY ID COLLATE NOCASE';
        db.all(sql, [], (err,rows) =>{
            if (err) {
                throw err;
            }
           res.json(rows)
        });
        db.close();
});
//Formação, Realizações Sobre mim
app.listen(port, () =>
{
    console.log(`Servidor rodando na porta ${port}`);
})