CREATE DATABASE arctech;
USE arctech;

CREATE TABLE Pacientes (
    ID_Paciente INT AUTO_INCREMENT PRIMARY KEY,
    Nome_Completo VARCHAR(100),
    Data_Nascimento DATE,
    CPF VARCHAR(11),
    Telefone VARCHAR(15),
    Endereco VARCHAR(255),
    Email VARCHAR(100),
    Informacao_Saude TEXT
);

CREATE TABLE Consultas (
    ID_Consulta INT AUTO_INCREMENT PRIMARY KEY,
    ID_Paciente INT,
    Data DATE,
    Hora TIME,
    Status ENUM('agendada', 'realizada', 'cancelada'),
    Observacoes TEXT,
    FOREIGN KEY (ID_Paciente) REFERENCES Pacientes(ID_Paciente)
);

CREATE TABLE Tratamentos (
    ID_Tratamento INT AUTO_INCREMENT PRIMARY KEY,
    ID_Consulta INT,
    Procedimento VARCHAR(100),
    Medicamentos_uso TEXT,
    Custo DECIMAL(10, 2),
    FOREIGN KEY (ID_Consulta) REFERENCES Consultas(ID_Consulta)
);

CREATE TABLE Pagamentos (
    ID_Pagamento INT AUTO_INCREMENT PRIMARY KEY,
    ID_Consulta INT,
    Valor DECIMAL(10, 2),
    Forma_Pagamento ENUM('dinheiro', 'cartão', 'pix', 'boleto', 'cheque'),
    Data_Pagamento DATE,
    Status ENUM('pago', 'pendente'),
    FOREIGN KEY (ID_Consulta) REFERENCES Consultas(ID_Consulta)
);

CREATE TABLE Funcionarios (
    ID_Funcionario INT AUTO_INCREMENT PRIMARY KEY,
    Nome_Completo VARCHAR(100),
    Data_Nascimento DATE,
    CPF VARCHAR(11),
    Telefone VARCHAR(15),
    Endereco VARCHAR(255),
    Cargo VARCHAR(50),
    Email VARCHAR(100),
    Formacao_Academica VARCHAR(255)
);

CREATE TABLE Historico_Saude (
    ID_Historico INT AUTO_INCREMENT PRIMARY KEY,
    ID_Paciente INT,
    Data_Registro DATE,
    Descricao_Problema TEXT,
    Tratamentos_Anteriores TEXT,
    Medicamentos_uso TEXT,
    FOREIGN KEY (ID_Paciente) REFERENCES Pacientes(ID_Paciente)
);

CREATE TABLE Agendas (
    ID_Agenda INT AUTO_INCREMENT PRIMARY KEY,
    ID_Funcionario INT,
    Data DATE,
    Hora_Inicial TIME,
    Hora_Final TIME,
    Observacoes TEXT,
    FOREIGN KEY (ID_Funcionario) REFERENCES Funcionarios(ID_Funcionario)
);

CREATE TABLE Agendamentos (
    Id_Agendamento INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255) NOT NULL,
    Sobrenome VARCHAR(255) NOT NULL,
    Telefone VARCHAR(20) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Data_Consulta DATETIME NOT NULL
);

CREATE TABLE Servicos(
ID_Servico INT AUTO_INCREMENT PRIMARY KEY,
ID_Paciente INT, 
Nome_Servico VARCHAR(200),
Nome_Completo VARCHAR (200),
Descricao_Servico TEXT,
Data_Horario DATETIME, 
Tempo_Duracao INT, 
FOREIGN KEY (ID_Paciente) REFERENCES Pacientes (ID_Paciente)
);

CREATE TABLE Pre_Avalicao(
    Id_PreAvaliacao INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(200), 
    Sobrenome VARCHAR(50), 
    Email VARCHAR(100), 
    Telefone VARCHAR(15), 
    Data_Nascimento DATE, 
    Mensagem TEXT
);


INSERT INTO Pre_Avalicao (Nome, Sobrenome, Email, Telefone, Data_Nascimento, Mensagem)
VALUES ('Miguel', 'Cordeiro', 'miguel@gmail.com', '11914817025', '2024-12-25', 'teste');


CREATE TABLE Login_ADM(
ID_Login INT AUTO_INCREMENT PRIMARY KEY,
Login VARCHAR (11),
Senha VARCHAR (30)
);

INSERT INTO Login_ADM(Login, Senha)
VAlUES ('24305737841', 'adm@1234'),
('123', '123');



INSERT INTO servicos(nome_servico, descricao_servico)
VALUES('Clareamento Dental','Clareamento Dental é um procedimento feito pelo profissional que visa tirar manchas mais intensas ao esmalte e ao dente.'),
('Ortondontia corretiva','Visa corrigir problemas de alinhamento ou oclusão dos dentes.'),
('Odontopediatria','Especialização que visa cuidar dos dentes de crianças, desde o nascimento até a adolescência.'),
('Lentes de contato do dente', 'Visa alinhar, mudar cor e aparência dos usuários que usam.'),
('Implante Dentário', 'Procedimento feito para "substituir" dentes perdidos por cárie ou outros motivos.'),
('Limpeza e Profilaxia', 'Visa limpar e tratar os dentes, assim evitando problemas futuros.'),
('Tratamento de canal', 'Tratamento que removea parte infectada ou inflamada do dente.'),
('Colocaçâo de coroas', 'Serviço que substitui apenas um dente afetado.'),
('Consultas e exames','Tratamentos básicos, sejam para inspeção de rotina até tratamentos mais complexos.');