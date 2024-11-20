import con from './connection.js'; 


export async function inserirInf(informacoes) {
    const comando = `
        INSERT INTO Agendamentos (Nome, Sobrenome, Telefone, Email, Data_Consulta)
        VALUES (?, ?, ?, ?, ?)
    `; 

    let resposta = await con.query(comando, [
        informacoes.nome, 
        informacoes.sobrenome, 
        informacoes.telefone, 
        informacoes.email, 
        informacoes.dataConsulta
    ]);
    
    let info = resposta[0];
    return info.insertId; 
}

export async function consultarAgenda() {
    const comando = `
        SELECT 
            Id_Agendamento AS ID,
            Nome,
            Sobrenome,
            Telefone,
            Email,
            Data_Consulta
        FROM Agendamentos
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}


export async function alterarInf(id, informacoes) {
    const comando = `
        UPDATE Agendamentos
        SET 
            Nome = ?, 
            Sobrenome = ?, 
            Telefone = ?, 
            Email = ?, 
            Data_Consulta = ?
        WHERE Id_Agendamento = ?;
    `;

    let resposta = await con.query(comando, [
        informacoes.nome,
        informacoes.sobrenome,
        informacoes.telefone,
        informacoes.email,
        informacoes.dataConsulta,
        id
    ]);
    let info = resposta[0];

    return info.affectedRows;
}


export async function removerAgendas(id) {
    const comando = `
        DELETE FROM Agendamentos
        WHERE Id_Agendamento = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows; 
}
