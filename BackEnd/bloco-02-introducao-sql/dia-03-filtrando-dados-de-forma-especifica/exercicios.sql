USE PecasFornecedores;
SELECT * FROM Pecas
WHERE name LIKE 'GR%';

USE PecasFornecedores;
SELECT * FROM Fornecimentos
WHERE peca = 2 ORDER BY fornecedor;

USE PecasFornecedores;
SELECT peca, preco, fornecedor FROM Fornecimentos
WHERE fornecedor LIKE '%N%';

USE PecasFornecedores;
SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA' ORDER BY name DESC;

USE PecasFornecedores;
SELECT COUNT(*) FROM Fornecedores
WHERE code LIKE '%F%';

USE PecasFornecedores;
SELECT * FROM Fornecimentos
WHERE preco BETWEEN 15 AND 40 ORDER BY preco;

USE PecasFornecedores;
SELECT COUNT(*) FROM Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';