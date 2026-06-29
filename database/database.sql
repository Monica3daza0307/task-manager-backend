CREATE DATABASE task_manager;

USE task_manager;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descripcion TEXT,
    estado VARCHAR(30) NOT NULL,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE tasks;

INSERT INTO tasks (titulo, descripcion, estado)
VALUES
('Aprender Angular', 'Estudiar Angular Material', 'Pendiente'),
('Crear Backend', 'Desarrollar API REST con Express', 'En progreso'),
('Probar CRUD', 'Validar operaciones con Postman', 'Completada');

SELECT * FROM tasks;
