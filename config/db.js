const mysql = require('mysql2');

const createConnection = () => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    connection.connect((error) => {
        if (error) {
            console.error('❌ Error al conectar con MySQL:', error.message);
            // Reintentar conexión después de 5 segundos
            setTimeout(() => {
                console.log('🔄 Reintentando conexión a MySQL...');
                createConnection();
            }, 5000);
            return;
        }

        console.log('✅ Conexión exitosa a MySQL');
    });

    return connection;
};

module.exports = createConnection();