-- Crea la base de datos si no existe
CREATE DATABASE IF NOT EXISTS baseapi; 

-- Selecciona la base de datos baseapi
USE baseapi; 

-- Crea la tabla fabricante con las columnas id y nombre
CREATE TABLE products (
    id INT(11) NOT NULL AUTO_INCREMENT,  -- Columna id con auto incremento
    name VARCHAR(45) DEFAULT NULL,  -- Columna nombre con un máximo de 45 caracteres
	description VARCHAR(45) DEFAULT NULL,  -- Columna descripción con un máximo de 45 caracteres
	price INT(11) DEFAULT NULL,  -- Columna precio con un máximo de 11 dígitos
    PRIMARY KEY (id)  -- Define la columna id como clave primaria
);

INSERT INTO products (id,name,description,price) 
VALUES 
(1,'Insulina Humana x100/ml x3 lap.','Insulina Humana prellenada en lapicera x 3',50000),
(2,'Metformina 500 x60 comp','Metformina 500 mg',10000),
(3,'Vildagliptina 1000 x60','Vildagliptina 1000',200005),
(4,'Indulina Degludec','100/ml x3 lap.',60000),
(5,'Indulina Detemir','100/ml x3 lap.',80000);
