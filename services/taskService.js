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

module.exports = {
    getAllTasks
};