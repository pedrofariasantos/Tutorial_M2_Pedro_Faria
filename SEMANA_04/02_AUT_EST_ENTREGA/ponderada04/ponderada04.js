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

app.get("/Formacao", function(req, res) {
    const sql = "SELECT * FROM Formacao";
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.log("Algo está errado!");
            res.status(500).send("Erro ao buscar dados");
        } else {
            res.json(rows);
            console.log(rows);
        }
    });
});

app.post("/Formacao1", function(req, res) {
    const curso = req.body.curso;
    const data = req.body.data;
    const sql = "INSERT INTO Formacao (Curso, Data) VALUES (?,?)";
    db.run(sql, [curso, data], function(err) {
        if (err) {
            console.log("Algo está errado!");
            res.status(500).send("Erro ao inserir dados");
        } else {
            res.json({ id: this.lastID });
        }
    });
});

app.put("/Formacao2", function(req, res) {
    const id = req.params.id;
    const curso = req.body.curso;
    const data = req.body.data;
    const sql = "UPDATE Formacao SET Curso = ?, Data = ? WHERE ID = ?";
    db.run(sql, [curso, data, id], function(err) {
        if (err) {
            console.log("Algo está errado!");
            res.status(500).send("Erro ao atualizar dados");
        } else {
            res.json({ rowsAffected: this.changes });
        }
    });
});
app.delete("/Formacao3", function(req, res) {
    const id = req.params.id;
    const sql = "DELETE FROM Formacao WHERE ID = ?";
    db.run(sql, [id], function(err) {
        if (err) {
            console.log("Algo está errado!");
            res.status(500).send("Erro ao excluir dados");
        } else {
            res.json({ rowsAffected: this.changes });
        }
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