import express from "express";
import axios from "axios";



const app = express();
const port = 3000;

app.use(express.static('public'));

const apiKey = 'openuv-g95nqhrlu102hy4-io';
const latitude = 41.30;
const longitude = 36.32;

const config = {
    headers: {'x-access-token': apiKey},
};

app.get("/", (req, res) =>{
    axios.get(`https://api.openuv.io/api/v1/uv?lat=${latitude}&lng=${longitude}`, config)
    .then(response => {
        const UV = response.data;
        res.render("index.ejs", {UV}); 
    })
    
   .catch(error => {
        console.error("error:", error);
        res.status(500).send("error uv");

   });



});




app.listen(port, () =>{ 
    console.log(`Listenin on ${port}`);
});