const taskModel = require('../models/taskModel');

const getAllTasks = (callback) => {
    taskModel.getAllTasks(callback);
};

const createTask = (task, callback) => {
    taskModel.createTask(task, callback);
};

module.exports = {
    getAllTasks,
    createTask
};