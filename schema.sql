CREATE TABLE `crud-app-seg-redes`.`libros` 
(`id` INT NOT NULL AUTO_INCREMENT ,
 `Titulo` VARCHAR(50) NOT NULL , 
 `Descripcion` VARCHAR(150) NOT NULL ,
  `createDAt` DATE NOT NULL , 
  `updatedAt` DATE NOT NULL , 
  PRIMARY KEY (`id`)) ENGINE = InnoDB;




INSERT INTO libros (id, Titulo, Descripcion) VALUES
(1, 'TITULO 1', 'Descripcion del libro 1'),
(2, 'TITULO 2', 'Descripcion del libro 2'),
(3, 'TITULO 3', 'Descripcion del libro 3'),
(4, 'TITULO 4', 'Descripcion del libro 4'),
(5, 'TITULO 5', 'Descripcion del libro 5'),
(6, 'TITULO 6', 'Descripcion del libro 6');