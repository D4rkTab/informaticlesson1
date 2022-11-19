const express = require('express')
const fs = require('fs');
const path = require('path');
const app = express()
const PORT = 3000
const controller = require('./contoller')
app.use(express.urlencoded({extended:false}))

app.get('/', (req,res) => {
   res.end(`<h1>main page</h1>`);
});
app.get('/users', (req,res) => {
    res.end(controller.getUsers())
})
app.post('/users', (req,res) => {
    console.log(req.body.login, req.body.password, req.body.email)
    res.end(controller.createUser(req.body.login, req.body.password, req.body.email))
});
app.put('/users/:id', (req,res) =>{
    res.end(controller.changeUser(req.id))
});
app.delete('/users', (req,res) => {

});

app.listen(PORT, () => {
    console.log(`Да прибудет с тобой сила на ${PORT} порту`)
})