-- Active: 1658871330862@@35.226.146.116@3306@gebru-4211824-helaine-ribeiro
CREATE TABLE IF NOT EXISTS Pokemon_Go (
    id VARCHAR(250) PRIMARY KEY ,
    name VARCHAR(64) ,
    type VARCHAR(64) ,
    weather VARCHAR(64) ,
    STAT_TOTAL VARCHAR(64) ,
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

  ### modificando coluna
ALTER TABLE Pokemon_Go MODIFY COLUMN  type VARCHAR(64);  
    
 ### modificando coluna
ALTER TABLE Pokemon_Go MODIFY COLUMN  weather VARCHAR(64) ; 
### modificando coluna
ALTER TABLE Pokemon_Go MODIFY COLUMN  STAT_TOTAL VARCHAR(64); 

### modificando coluna
ALTER TABLE Pokemon_Go MODIFY COLUMN id VARCHAR(64);  

###excluir coluna
ALTER TABLE Pokemon_Go DROP pokedex_number;
    
  