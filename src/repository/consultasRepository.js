import con from './connection.js'; 

export async function inserirConsultas (consultas) {
    const comando = `
    insert into Consultas (Data, Hora, Status, Observacoes )
                        values (?, ?, ?,?) 
    `; 

    let resposta = await con.query (comando, [consultas.Data, consultas.Hora, consultas.Status,consultas.Observacoes])
    let info = resposta [0]; 

    return info.inserId; 
}


export async function consultarConsultas(){
    const comando = `
    select ID_Consulta              id,
            ID_Paciente             id,
            Data                    dia,
            Hora                    horario,
            Status                  descricao,
            Observacoes             text,
        from Consultas
    `;

    let resposta = await con.query (comando);
    let registros = resposta [0];

    return registros

}

export async function alterarConsultas(id, consultas){
    const comando = `
    update Consultas 
       set   ID_Consulta  = ?,         
             ID_Paciente  = ?,       
             Data       = ?,    
             Hora       = ?,             
             Status     = ?,         
             Observacoes  = ?     
where ID_Consulta  = ?;
`
    let resposta = await con.query ((comando), [consultas.procedimento, consultas.medicamentosDeUso, consultas.custo, id])
    let info = resposta [0];

    return info.affectedRows;
}


export async function removerConsultas (id){
    const comando = `
    delete from Consultas
    whwre ID_Consulta = ? 
`

    let resposta = await con.query(comando, [id]); 
    let info = resposta[0]; 

    return info.affectedRows; 
}

