const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();

app.Use(cors());
app.Use(express.json());

app.get('/', async(req, res)=>{
    res.send('connect notes server is running');

})

app.listen(port, () => console.log(`connect notes server running on ${port}`))
