```#criando tabela
CREATE TABLE Actor (
    id int(1)  auto_increment not null primary key,
    nome varchar(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender ENUM ("male", "female") NOT NULL
);
#adicionando dados nos campos
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(DEFAULT, "Tony Ramos",400000,"1948-08-25", "male"),
(DEFAULT,"Glória Pires",1.200000,"1963-08-23","female"),
(DEFAULT,"Fernanda Montenegro",300000,"1929-10-19","female"),
(DEFAULT, "Juliana Paes",719333.33,"1979-03-26", "female"),
(DEFAULT, "Antônio Fagundes",400000,"1949-04-18", "male"),
(default, "maria", 50000,"1954-06-12", "female");

insert into Actor values
(default, "João", 30000,"1957-08-20", "male");

#selecionando dados da tabela
select * from Actor;

#descreve os dados que tem nas colunas
describe Actor;

#alterar tabela(adicionar uma nova coluna)
alter table Actor
add column trabalhando varchar(25) not null ;

#adiciona uma nova coluna em uma determinada posição usa o after
alter table Actor
add column trabalhando varchar(25) after salary ;

#adiciona uma nova coluna na primeira posição inicio usando o first
alter table Actor
add column teste int first ;

#modificar dados da coluna
alter table Actor
modify column trabalhando varchar(255) not null ;

#exclui a coluna selecionada
alter table Actor
drop column atuando;

#renomeando dados nome da tabela primeiro coloca o nome da coluna depois o nome para renomear
alter table Actor
change column trabalhando working varchar(255) not null;

#renomear o nome da tabela
alter table Actor
rename to atores;```