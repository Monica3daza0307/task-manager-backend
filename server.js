require('dotenv').config();

const app = require('./app');

// Conectar con la base de datos
require('./config/db');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});