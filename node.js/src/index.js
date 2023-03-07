const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());


const graduations = [];

app.get('/graduations', (req, res) => {

    const allGraduations = graduations;

    return res.status(200).json(allGraduations);
});

app.post('/graduation', (req,res) => {

    const { id, name, end_year, classe, university } = req.body;

    const graduation = { id, name, end_year, classe, university };

    //insert 
    graduations.push(graduation)

    return res.status(201).json(graduations);
});

app.get('/graduation/:graduation_id', (req,res) => {

    const { graduation_id } = req.params;

    const graduation = graduations.find( (graduation) => graduation.id == graduation_id)

    return res.status(200).json(graduation);
})

app.get('/pokemons', (req,res) => {

    axios.get ('https://pokeapi.co/api/v2').then(
        resp => {
            console.log(resp.data);

            return res.status(200).json(resp.data);
        }
    )

})

app.listen(3333, () => console.log('Servidor estar rodando'))