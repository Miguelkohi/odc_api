import * as db from "../repository/preAvalicaoRepository.js"; 

import { Router } from "express";
const endpoints = Router ();

endpoints.get ('/preAvaliacao/', async (req, resp) => {
    try {
        let lancamento = await db.consultarAvaliacao (); 
        resp.send (lancamento);
    }
    catch (err) {
        resp.status (400).send ({
            erro: err.message
        })
    }
})


endpoints.post ('/preAvaliacao/', async (req, resp) => {
    try {
        let dominio = req.body; 

        let id= await db.inserirAvaliacao (dominio);

        resp.send ({
            novoId: id
        })
    }
    catch (err){
        resp.status (400).send ({
            erro: err.message
        })
    }
})


endpoints.put ('/preAvaliacao/: id', async (req, resp) => {
    try {
        let id = req.params.id; 
        let pessoa = req.body; 

        let linhasAfetadas = await db.alterarDmn(id, dominio);
        if(linhasAfetadas >= 1){
            resp.send ();
        }
        else {
            resp.status (404).send({erro: 'Nenhuma informação foi inserida com esses dados'})
        }
    }
    catch (err){
        req.status(400).send ({
            erro: err.message
        })
    }
})

endpoints.delete ('preAvaliacao/:id', async (req, resp) => {
    try{
        let id= req.params.id;

        let linhasAfetadas = await db.removerDaAvaliacao(id); 
        if(linhasAfetadas >= 1){
            resp.send (); 
        }
        else {
           resp.status (404).send ({erro: 'Essa informação não existe mais'})
        }
    }
    catch (err) {
        resp.status (400).send ({
            erro: err.message
        })
    }
}) 


export default endpoints; 