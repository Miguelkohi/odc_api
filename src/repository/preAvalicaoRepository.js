import con from "./connection.js";

export async function inserirAvaliacao(avaliacao) {
    const comando = `
        INSERT INTO Pre_Avalicao (Nome, Sobrenome, Email, Telefone, Data_Nascimento, Mensagem)
        VALUES (?, ?, ?, ?, ?, ?);
    `;

    const [resposta] = await con.query(comando, [
        avaliacao.nome,
        avaliacao.sobrenome,
        avaliacao.email,
        avaliacao.telefone,
        avaliacao.dataNascimento,  
        avaliacao.mensagem         
    ]);

    return resposta.insertId;  
}

export async function consultarAvaliacao() {
    const comando = `
        SELECT Id_PreAvaliacao AS ID,
               Nome,
               Sobrenome,
               Email,
               Telefone,
               Data_Nascimento AS Date,
               Mensagem AS Text
        FROM Pre_Avalicao;
    `;

    const [registros] = await con.query(comando);
    return registros;
}

export async function alterarAvaliacao(id, avaliacao) {
    const comando = `
        UPDATE Pre_Avalicao
        SET Nome = ?, 
            Sobrenome = ?, 
            Email = ?, 
            Telefone = ?, 
            Data_Nascimento = ?, 
            Mensagem = ?
        WHERE Id_PreAvaliacao = ?;
    `;

    const [resposta] = await con.query(comando, [
        avaliacao.nome,
        avaliacao.sobrenome,
        avaliacao.email,
        avaliacao.telefone,
        avaliacao.dataNascimento,
        avaliacao.mensagem,      
        id
    ]);

    return resposta.affectedRows;
}

export async function removerAvaliacao(id) {
    const comando = `
        DELETE FROM Pre_Avalicao
        WHERE Id_PreAvaliacao = ?;
    `;

    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}
