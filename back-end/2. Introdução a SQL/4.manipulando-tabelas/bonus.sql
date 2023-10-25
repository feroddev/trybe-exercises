-- Exercício 8:
UPDATE box_office
    SET rating = 9.0
    WHERE domestic_sales > 400000000;

-- Exercício 9:
UPDATE box_office
    SET rating = 6.0
    WHERE domestic_sales BETWEEN 200000001 AND 299999999;

-- Exercício 10:
DELETE FROM box_office
    WHERE movie_id IN(1,6,7,8);
DELETE FROM movies
    WHERE length_minutes < 100;
