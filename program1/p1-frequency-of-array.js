const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse the JSon
app.use(express.json());

//Function to generate the randowm array
/*
const generateArray = (length) => new Array.fill(0).map((item) => Math.floor(Math.random() * 10));
*/

const generateArray = (length) => {
    return Array.from({length}, ()=> Math.floor(Math.random() * 10));
}

// Function to calculate the frequency
/*
  const calculateFrequency = (a) => a.reduce((acc, item)=>{ return {...acc, [item] : 1 + (acc[item] || 0)}},{});
*/
const calculateFrequency = (a) =>{
 return a.reduce((acc, item)=>{
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  } ,{});
};

/* 
 Create two endpoints:
 One for generating the array.
 One for calculating frequency.
 */

 // Endpoint to generate random array
app.get('/generate-array/:length', (req,res) =>{
    const length = parseInt(req.params.length);

    if(isNaN(length) || length <= 0){
        return res.status(400)
        .send({
            error: 'Invalid length'
        });
    }

    const randomArray = generateArray(length);
    res.send({ array: randomArray });
});

// Endpoint to calculate the frequency

app.post('/calculate-frequency',(req,res)=>{
    const { array } = req.body;

    if (!Array.isArray(array)) {
        return res.status(400).send({ error: 'Invalid array input' });
      }
    const frequency =calculateFrequency(array);
    res.send({frequency});

});

// Start the server

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
});