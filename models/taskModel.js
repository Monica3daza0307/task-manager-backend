const db = require('../config/db');

const getAllTasks = (callback) => {
    const sql = 'SELECT * FROM tasks';

    db.query(sql, (error, results) => {
        if (error) {
            return callback(error, null);
        }

        callback(null, results);
    });
};

const createTask = (task, callback) => {

    const sql = `
        INSERT INTO tasks (titulo, descripcion, estado)
        VALUES (?, ?, ?)
    `;

    db.query(
        sql,
        [task.titulo, task.descripcion, task.estado],
        (error, results) => {

            if (error) {
                return callback(error, null);
            }

            callback(null, results);

        }
    );

};

const updateTask = (id, task, callback) => {

    const sql = `
        UPDATE tasks
        SET titulo = ?, descripcion = ?, estado = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [task.titulo, task.descripcion, task.estado, id],
        (error, results) => {

            if (error) {
                return callback(error, null);
            }

            callback(null, results);

        }
    );

};

const deleteTask = (id, callback) => {

    const sql = `
        DELETE FROM tasks
        WHERE id = ?
    `;

    db.query(sql, [id], (error, results) => {

        if (error) {
            return callback(error, null);
        }

        callback(null, results);

    });

};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
};
