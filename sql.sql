CREATE DATABASE IF NOT EXISTS demandas_materiais;
USE demandas_materiais;

CREATE TABLE Usuario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  senha VARCHAR(100) NOT NULL,
  matricula VARCHAR(50) NOT NULL,
  campus VARCHAR(100) NOT NULL
);

CREATE TABLE Demanda (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  area VARCHAR(100) NOT NULL,
  campus VARCHAR(100) NOT NULL,
  descricao TEXT NOT NULL,
  itens TEXT,
  status VARCHAR(50) DEFAULT 'aberta'
);

CREATE TABLE Contato (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100),
  telefone VARCHAR(30),
  campus VARCHAR(100)
);

INSERT INTO Usuario (nome, email, senha, matricula, campus)
VALUES ('Admin', 'admin@ifpe.edu.br', '123', '0001', 'Recife');

INSERT INTO Demanda (titulo, area, campus, descricao, itens, status)
VALUES ('Projetor', 'TI', 'Recife', 'Precisa de projetor para sala', 'Projetor HDMI', 'aberta');

INSERT INTO Contato (nome, email, telefone, campus)
VALUES ('Coordenação', 'coord@ifpe.edu.br', '81999999999', 'Recife');

SELECT * FROM Usuario;
SELECT * FROM Demanda;
SELECT * FROM Contato;

UPDATE Usuario SET nome = 'Novo Nome' WHERE id = 1;
UPDATE Demanda SET status = 'concluida' WHERE id = 1;
UPDATE Contato SET telefone = '81888888888' WHERE id = 1;

DELETE FROM Usuario WHERE id = 1;
DELETE FROM Demanda WHERE id = 1;
DELETE FROM Contato WHERE id = 1;

