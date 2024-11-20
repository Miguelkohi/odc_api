import * as db from "../repository/agendasRepository.js"; 
import { Router } from "express";

const endpoints = Router();

endpoints.get('/agenda', async (req, resp) => {
    try {
        let registros = await db.consultarAgenda();
        resp.status(200).send(registros); 
    } catch (err) {
        resp.status(400).send({
            erro: err.message 
        });
    }
});


endpoints.post('/agenda', async (req, resp) => {
    try {
        let informacao = req.body; 
        let id = await db.inserirInf(informacao); 
        resp.status(201).send({
            novoId: id 
        });
    } catch (err) {
        resp.status(400).send({
            erro: err.message 
        });
    }
});


endpoints.put('/agenda/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let pessoa = req.body; 
        let linhasAfetadas = await db.alterarInf(id, pessoa); 

        if (linhasAfetadas >= 1) {
            resp.status(200).send(); 
        } else {
            resp.status(404).send({
                erro: 'Nenhuma informação foi alterada com esses dados' 
            });
        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message 
        });
    }
});


endpoints.delete('/agenda/:id', async (req, resp) => {
    try {
        let id = req.params.id; 
        let linhasAfetadas = await db.removerAgendas(id); 

        if (linhasAfetadas >= 1) {
            resp.status(200).send();
        } else {
            resp.status(404).send({
                erro: 'Esse agendamento não existe'
            });
        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message 
        });
    }
});

export default endpoints;
