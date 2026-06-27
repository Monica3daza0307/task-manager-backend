const express = require('express');
const cors = require('cors');

const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message: 'API Task Manager funcionando correctamente'
    });
});

app.use('/tasks', taskRoutes);

module.exports = app;