var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send('Hello World! 1');
})

app.listen(PORT, ()=>{
    console.log('Im web server!');
});