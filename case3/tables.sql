-- Active: 1658871330862@@35.226.146.116@3306@gebru-4211824-helaine-ribeiro
CREATE TABLE IF NOT EXISTS Pokemon_Go (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    pokedex_number INT,
    type VARCHAR(64) NOT NULL,
    weather VARCHAR(64) NOT NULL,
    STAT_TOTAL VARCHAR(64) NOT NULL,
    ATK INT,
    DEF INT,
    STA INT
);

SELECT * from Pokemon_Go;

###alterar coluna

 ALTER TABLE Pokemon_Go MODIFY COLUMN STAT_TOTAL INT;

### modificando coluna
ALTER TABLE Pokemon_Go MODIFY COLUMN id INT;

###excluir coluna
ALTER TABLE Pokemon_Go DROP id;

###adicionar coluna
ALTER TABLE Pokemon_Go ADD id int FIRST;

### modificando coluna
ALTER TABLE Pokemon_Go MODIFY COLUMN id VARCHAR(64) PRIMARY KEY;

    
    
 
    
  