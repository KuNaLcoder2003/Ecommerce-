const express = require('express');
const app = express();
const mainRouter = require('./routes/index')
const cors = require('cors');


app.use(cors());

app.use(express.json());


app.use('/api/v1' , mainRouter)

app.use(express.json({ limit: "50mb" }));  // Increase JSON payload size
app.use(express.urlencoded({ limit: "50mb", extended: true })); // Increase URL-encoded data size


app.listen(3000 , ()=>{
    console.log('App started');
})


