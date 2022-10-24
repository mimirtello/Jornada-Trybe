CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;

1.Agora crie a tabela com o nome setor com as colunas definidas na 2ª Forma Normal.

CREATE TABLE setor(
  setor_id INT primary key,
  nome VARCHAR(100)
) engine=InnoDB;

2.Use o comando INSERT INTO para adicionar os valores definidos na tabela correspondente.

    INSERT INTO setor(setor_id, nome) VALUES(1, 'Administração');
    INSERT INTO setor(setor_id, nome) VALUES (2, 'Vendas');
    INSERT INTO setor(setor_id, nome) VALUES(3, 'Operacional');
    INSERT INTO setor(setor_id, nome) VALUES(4, 'Estratégico');
    INSERT INTO setor(setor_id, nome) VALUES(5, 'Marketing');

3.Repita o processo de criação de tabela, agora para a tabela de funcionários.

    CREATE TABLE funcionario(
        funcionario_id INT primary key,
        nome VARCHAR(100),
        sobrenome VARCHAR(100),
        contato VARCHAR(100),
        telefone VARCHAR(100),
        data_cadastro VARCHAR(100)
    ) engine=InnoDB;

4.Use o comando de INSERT INTO novamente, desta vez para adicionar os dados de cada funcionário na tabela correspondente.

    INSERT INTO funcionario (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25');
    INSERT INTO funcionario (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00');
    INSERT INTO funcionario (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35');
    INSERT INTO funcionario (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

5.Para criar a tabela funcionario_setor, lembre-se de associar as chaves estrangeiras (foreign key) à tabela correta.

    CREATE TABLE funcionario_setor(
        funcionario_id INT NOT NULL,
        setor_id INT NOT NULL,
        foreign key (funcionario_id) references funcionario(funcionario_id),
        foreign key (setor_id) references setor(setor_id)
    ) engine=InnoDB;

6.Adiciona os valores de id’s correspondentes à tabela n:n funcionario_setor.

    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(12, 1);
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(12, 2);
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(13, 3);
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(14, 4);
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(14, 2);
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(15, 5);