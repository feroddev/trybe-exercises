SELECT
    CASE
        WHEN u.idade <= 30 THEN 'Até 30 anos'
        WHEN u.idade >= 31 AND u.idade <= 60 THEN 'Entre 31 e 60 anos'
        WHEN u.idade > 60 THEN 'Maior de 60 anos'
    END AS faixa_etaria,
    COUNT(DISTINCT u.id) AS total_pessoas_usuarias,
    COUNT(mf.usuario_id) AS total_favoritadas
    FROM usuarios u 
    LEFT JOIN musicas_favoritas mf ON mf.usuario_id = u.id
    GROUP BY faixa_etaria
    ORDER BY faixa_etaria;