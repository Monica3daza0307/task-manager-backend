const taskModel = require('../models/taskModel');

const getAllTasks = (callback) => {
    taskModel.getAllTasks(callback);
};

const createTask = (task, callback) => {
    taskModel.createTask(task, callback);
};

const updateTask = (id, task, callback) => {

    taskModel.updateTask(id, task, callback);

};

const deleteTask = (id, callback) => {

    taskModel.deleteTask(id, callback);

};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
};