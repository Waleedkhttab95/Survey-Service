const express=require('express');
const app = express();

app.get('',(req , res)=>{
res.send({ hi:'كل خرا'})
});

const PORT  = process.env.PORT || 5000;
app.listen(PORT);