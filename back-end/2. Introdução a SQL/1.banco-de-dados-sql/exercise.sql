Exercício 1: Pesquisar em uma tabela no MySQL Workbench sem código:

1. Abra o MySQL Workbench.
2. Conecte-se ao servidor de banco de dados e abra o esquema (banco de dados) que contém a tabela que você deseja pesquisar.
3. No painel esquerdo, selecione o esquema, expanda a seção "Tabelas" e clique com o botão direito na tabela que você deseja pesquisar.
4. Escolha a opção "Selecionar Linhas - Limit 1000" (ou outra opção similar) para visualizar os dados da tabela.

Exercício 2: Criar uma tabela no MySQL Workbench sem código SQL:

1. Abra o MySQL Workbench.
2. Conecte-se ao servidor de banco de dados.
3. No painel esquerdo, selecione o esquema (banco de dados) onde deseja criar a tabela.
4. Clique com o botão direito no esquema e escolha "Tabelas" > "Criar Tabela".

Exercício 3: Criar uma tabela "filme" com restrições:


Nome da tabela: filme

Colunas:
1. filme_id - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente.
2. descricao - não permite nulos, tipo texto (varchar(100)).
3. ano_lançamento - não permite nulos, tipo int.
4. nota - permite nulos, tipo int.

Exercício 4: Encontrar a tabela referenciada pela coluna "country_id" na tabela "city":

Na tabela "city", a coluna "country_id" faz referência à tabela "country".

Exercício 5: O relacionamento da tabela "city" com a tabela "country" é de 1:N, ou seja, uma cidade pode pertencer a um único país (1) e um país pode ter várias cidades (N).

Exercício 6: O relacionamento da tabela "country" com a tabela "city" também é de 1:N, pois um país (1) pode conter várias cidades (N).

Exercício 7: Para encontrar exemplos de relacionamentos 1:N ou N:1 nas tabelas do banco de dados "sakila", é necessário analisar cada tabela individualmente, identificando as chaves estrangeiras e chaves primárias em cada tabela para determinar a natureza do relacionamento. Alguns exemplos podem incluir:

1. Tabela "customer" (N:1) relacionada com a tabela "address" (1:N), onde vários clientes podem compartilhar o mesmo endereço.
2. Tabela "rental" (N:1) relacionada com a tabela "inventory" (1:N), onde vários DVDs alugados estão associados a um único registro de aluguel.
3. Tabela "staff" (N:1) relacionada com a tabela "store" (1:N), onde um membro da equipe (staff) trabalha em uma única loja, mas várias equipes podem ser atribuídas a uma loja.