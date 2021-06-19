const express= require("express");
const path= require("path");

const app= express();
const pathPublic= path.resolve (__dirname, './public');

app.use(express.static(pathPublic));

app.listen(process.env.PORT || 3100, ()=>{
    console.log('Funcionando en puerto 3100');
});

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/register', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})
app.get('/login', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})