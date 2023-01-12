const parse= require('csv-parser');
const fs= require('fs');
const express =require('express');
let app= express();


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}


    app.use(allowCrossDomain);
 
const result=[];
fs.createReadStream('ipsastre.csv')
.pipe(parse({}))
.on('data',(data)=>
{
result.push(data);
}).on ('error',(error)=>
{
    console.log('error');
}).on('end',(end)=>{
    console.log(result)
})
app.post('/result',(req,res)=>{
    res.json(result);

})
app.listen(9000,()=> console.log('server is listening to csv convert'));