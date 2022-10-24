    DROP SCHEMA IF EXISTS albuns;
    CREATE SCHEMA albuns;
    USE albuns;

1.Crie a tabela de artistas.

        CREATE TABLE artista(
        artista_id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(50) NOT NULL
    );

2.Crie a tabela de estilos musicais.

    CREATE TABLE estilo_musical(
        estilo_id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(50) NOT NULL
    );

3.Crie a tabela de álbuns levando em consideração que as colunas de estilo e artista são chaves estrangeiras referenciando as tabelas criadas anteriormente.

    CREATE TABLE album(
        album_id INT PRIMARY KEY AUTO_INCREMENT,
        titulo VARCHAR(50) NOT NULL,
        preço INT NOT NULL,
            estilo_id INT NOT NULL,
            artista_id INT NOT NULL,
        FOREIGN KEY (estilo_id) REFERENCES estilo_musical (estilo_id),
        FOREIGN KEY (artista_id) REFERENCES artista (artista_id)
    );

4.Crie a tabela de canções levando em consideração que a coluna de album deve ser uma chave estrangeira referenciando a tabela correspondente.

    CREATE TABLE cancao(
        cancao_id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(50) NOT NULL,
            album_id INT NOT NULL,
        FOREIGN KEY (album_id) REFERENCES album (album_id)
    );