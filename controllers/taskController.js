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

const updateTask = (req, res) => {

    const id = req.params.id;
    const task = req.body;

    taskService.updateTask(id, task, (error, results) => {

        if (error) {
            return res.status(500).json({
                message: 'Error al actualizar la tarea',
                error: error.message
            });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({
                message: 'Tarea no encontrada'
            });
        }

        res.status(200).json({
            message: 'Tarea actualizada correctamente'
        });

    });

};

const deleteTask = (req, res) => {

    const id = req.params.id;

    taskService.deleteTask(id, (error, results) => {

        if (error) {
            return res.status(500).json({
                message: 'Error al eliminar la tarea',
                error: error.message
            });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({
                message: 'Tarea no encontrada'
            });
        }

        res.status(200).json({
            message: 'Tarea eliminada correctamente'
        });

    });

};



module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
};