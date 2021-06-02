const express= require("express");
const path= require("path");

const app= express();
const pathPublic= path.resolve (__dirname, './public');

app.use(express.static(pathPublic));

app.listen(3000, ()=>{
    console.log('Funciona');
});

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/header.html'));
});
/*
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});
*/