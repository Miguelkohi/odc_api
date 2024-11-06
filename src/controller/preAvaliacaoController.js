import * as db from "../repository/preAvalicaoRepository.js";
import { Router } from "express";
const endpoints = Router();

endpoints.get('/preAvaliacao/', async (req, resp) => {
    try {
        const lancamento = await db.consultarAvaliacao();
        resp.send(lancamento);
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

endpoints.post('/preAvaliacao/', async (req, resp) => {
    try {
        const dominio = req.body;
        const id = await db.inserirAvaliacao(dominio);

        resp.send({ novoId: id });
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

endpoints.put('/preAvaliacao/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const dominio = req.body;

        const linhasAfetadas = await db.alterarAvaliacao(id, dominio);
        if (linhasAfetadas >= 1) {
            resp.send();
        } else {
            resp.status(404).send({ erro: 'Nenhuma informação foi inserida com esses dados' });
        }
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

endpoints.delete('/preAvaliacao/:id', async (req, resp) => {
    try {
        const id = req.params.id;

        const linhasAfetadas = await db.removerAvaliacao(id);
        if (linhasAfetadas >= 1) {
            resp.send();
        } else {
            resp.status(404).send({ erro: 'Essa informação não existe mais' });
        }
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

export default endpoints;