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

const createTask = (req, res) => {

    const task = req.body;

    taskService.createTask(task, (error, results) => {

        if (error) {

            return res.status(500).json({
                message: 'Error al crear la tarea',
                error: error.message
            });

        }

        res.status(201).json({
            message: 'Tarea creada correctamente',
            id: results.insertId
        });

    });

};

module.exports = {
    getAllTasks,
    createTask
};