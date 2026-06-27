const taskService = require('../services/taskService');

const getAllTasks = (req, res) => {

    taskService.getAllTasks((error, results) => {

        if (error) {
            return res.status(500).json({
                message: 'Error al obtener las tareas',
                error: error.message
            });
        }

        res.status(200).json(results);

    });

};

module.exports = {
    getAllTasks
};