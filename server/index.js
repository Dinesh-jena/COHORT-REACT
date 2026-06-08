const express = require('express');

const app = express();

app.get('/data',(req,res)=>{

    const dummy=[
    {
        username:"Dinesh Jena",
        city:'Surat',
        age:30
    }
    ]

     res.setHeader(
        'Access-Control-Allow-Origin',
        'http://localhost:5173'
    );

    res.json({data:dummy});
    

})


app.listen(8000,()=>{
    console.log('Server is running on at 8000');
})