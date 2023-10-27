-- Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
SELECT UCASE('trybe');

-- Faça uma query que transforme a frase 'A Internet mudou o mundo' em 'A IA mudou o mundo'.
SELECT REPLACE('A Internet mudou o mundo', 'Internet', 'IA');

-- Utilizando uma query, encontre quantos caracteres temos em 'Uma frase qualquer'.
SELECT CHAR_LENGTH('Uma frase qualquer');

-- Extraia e retorne apenas a palavra “JavaScript” da frase 'A linguagem JavaScript está entre as mais usadas'.
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

-- Por fim, padronize a string 'RUA NORTE 1500, RIO DE JANEIRO, BRASIL' para que suas informações estejam todas em caixa baixa.
SELECT LCASE('RUA NORTE 1500, RIO DE JANEIRO, BRASIL');

/* Usando o IF na tabela sakila.film, exiba o id do filme, o título e uma coluna extra 
chamada ‘filme visto?’, em que deve-se avaliar se o nome do filme é ‘ACE GOLDFINGER‘. 
Caso seja, exiba “OK”. Caso contrário, exiba “FALTA ASSISTIR”. 
Não esqueça de usar um alias para renomear a coluna da condicional. */

SELECT film_id, title, 
    IF(title = 'ACE GOLDFINGER', 'OK', 'FALTA ASSISTIR')AS 'filme visto?' FROM sakila.film;

/* Usando o CASE na tabela sakila.film, exiba o título, a classificação indicativa (rating) 
e uma coluna extra que vamos chamar de ‘grupo-alvo’ em que colocaremos a classificação 
do filme de acordo com as seguintes siglas:
G: “Livre para todas as idades”;
PG: “Maiores de 10 anos”;
PG-13: “Maiores de 13 anos”;
R: “Maiores de 17 anos”;
Se não cair em nenhuma das classificações anteriores: “Proibido para menores de idade”. */

SELECT title, rating,    
    CASE
        WHEN rating = 'G' THEN 'Livre para todas as idades'
        WHEN rating = 'PG' THEN 'Livre para todas as idades'
        WHEN rating = 'PG-13' THEN 'Livre para todas as idades'
        WHEN rating = 'R' THEN 'Livre para todas as idades'
        ELSE 'Proibido para menores de idade'
    END AS 'grupo-alvo'
FROM sakila.film;

-- Monte uma query que gere um valor entre 15 e 20
SELECT ROUND(15 + (RAND() * 5));

-- Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.
SELECT ROUND(15.7515971, 5);

-- Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?
SELECT FLOOR(39.494);

-- Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?
SELECT CEIL(85.234);

-- Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());

-- Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00'.
SELECT TIMEDIFF('11:00:00', '10:25:45');

-- A média de duração dos filmes e dê o nome da coluna de ‘Media de Duracao’;
SELECT AVG(`length`) AS 'Media de Duracao' FROM sakila.film;

-- A duração mínima dos filmes como ‘Duracao Minima’;
SELECT MIN(`length`) AS 'Duracao Minima' FROM sakila.film;

-- A duração máxima dos filmes como ‘Duracao Maxima’;
SELECT MAX(`length`) AS 'Duracao Maxima' FROM sakila.film;

-- A soma de todas as durações como ‘Tempo de Exibicao Total’;
SELECT SUM(`length`) AS 'Tempo de Exibicao Total' FROM sakila.film;

-- E, finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como ‘Filmes Registrados’.
SELECT COUNT(`length`) AS 'Filmes Registrados' FROM sakila.film;

/* Usando a query a seguir, modifique-a de forma que exiba apenas as durações médias
que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada 
por AVG(length), de forma que deixe a query mais legível. Finalize ordenando os 
resultados de forma decrescente.
 */

SELECT rating, AVG(length) AS media_duracao
    FROM sakila.film
    GROUP BY rating
    HAVING media_duracao BETWEEN 114.9 AND 121.51
    ORDER BY media_duracao DESC;

/* Usando a query a seguir, exiba apenas os valores de total do custo de substituição
que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost), 
de forma que deixe a query mais legível. Finalize ordenando os resultados de forma 
crescente. */

SELECT rating, SUM(replacement_cost) AS custo_total
    FROM sakila.film
    GROUP by rating
    HAVING custo_total > 3950.50
    ORDER BY custo_total;