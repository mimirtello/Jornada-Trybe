USE Pixar;


INSERT INTO Movies(title, director, year, length_minutes)
  VALUES ('Monstros SA', 'Pete Docter', 2001, 92),
         ('Procurando Nemo', 'Jon Lasseter', 2003, 107),
         ('Os Incríveis', 'Brad Bird', 2004, 116),
         ('WALL-E', 'Pete Docter', 2008, 104);

INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
VALUE (9, 6.8, 450000000, 370000000);

SET SQL_SAFE_UPDATES = 0;

UPDATE Movies
SET director = 'Andrew Staton'
WHERE title = 'Procurando Nemo';

UPDATE Movies
SET title = 'Ratatouille', year = 2007
WHERE title = 'ratatui';

INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
  VALUES (8, 8.5, 300000000, 250000000),
         (10, 7.4, 460000000, 510000000),
         (11, 9.9, 290000000, 280000000);

DELETE FROM BoxOffice
WHERE movie_id = 11; -- este é o id do filme WALL-E

DELETE FROM Movies
WHERE title = 'WALL-E';

SELECT id FROM Movies
WHERE director = 'Andrew Staton';
-- primeiro é utilizada essa query para selecionar os ids dos filmes a serem excluídos (2 e 9)

DELETE FROM BoxOffice
WHERE movie_id IN (2, 9);

DELETE FROM Movies
WHERE director = 'Andrew Staton';