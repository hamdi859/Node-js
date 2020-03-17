const express=require('express');
const app=express();
app.use((req,res)=>{
    res.json({
        name:'Boukottaya',
        age:29,
        adress:'Mansoura',
        mother:'Radhia Barrek',
    })
})
module.exports=app;