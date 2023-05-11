var express = require ("express");
const app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var sqlite3 = require ('sqlite3').verbose();
var DBPATH = 'banco.db';
var db = new sqlite3.Database(DBPATH);

app.use(bodyParser.json());


app.get("/info", function(req,res){
    var sql = "SELECT * FROM Experiencia"
    db.all(sql,[],(err,rows)=>{
        if(err){
            throw err
        }
        res.send(rows)
        console.log(rows)
    });
});

//post put(atualizar)
app.listen(port, () =>
{
    console.log(`Servidor rodando na porta ${port}`);
})