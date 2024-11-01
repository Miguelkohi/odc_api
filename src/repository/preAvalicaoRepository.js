import con from "./connection.js"; 

export async function inserirAvaliacao(avaliacao) {
    const comando = `
    insert into pre_Avaliacao (Nome, Sobrenome, Email, Telefone, Data_Nascimento, Mensaagem)
                               values (?, ?, ?, ?, ?, ?);
    
    `; 


    let resposta = await con.query (comando, [avaliacao.Nome, avaliacao.Sobrenome, avaliacao.Email, avaliacao.Telefone, avaliacao.Data_Nascimento, avaliacao.Mensagem])
    let info = resposta [0]; 

    return info.insertId; 
}

export async function consultarAvaliacao() {
    const comando =  `
    SELECT Id_PreAvaliacao      ID
            Nome                Nome,
            Sobrenome           Sobrenome, 
            Email               Email,
            Telefone            Telefone,
            Data_Nascimento     Date,
            Mensaagem           Text
    FROM avaliacao;
    `; 
     

    let resposta = await con.query (comando); 
    let registros = resposta [0]; 

    return registros
}

export async function alterarAvaliacao(id, avaliacao){
    const comando = `
        update Pre_Avaliacao set 
                Nome =?, 
                Sobrenome =?,
                Email = ?,
                Telefone = ?,  
                Data_Nascimento = ?, 
                Mensaagem = ?
        where Id_PreAvaliacao = ?
    `
    let resposta = await con.query(comando,[avaliacao.Nome, avaliacao.Sobrenome, avaliacao.Email, avaliacao.Telefone, avaliacao.Data_Nascimento, avaliacao.Mensagem, id])
    let info = resposta [0]; 

    return info.affectedRows; 
}

export async function removerAvaliacao(id){
    const comando = `
            delete from Pre_Avaliacao
            where Id_PreAvaliacao = ?
    `

    let resposta = await con.query (comando, [id]); 
    let info = resposta [0]; 

    return info.affectedRows; 
}