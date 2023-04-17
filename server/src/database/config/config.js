module.exports ={
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "pool": {
      max: 10, // número máximo de conexiones en el conjunto
      min: 0, // número mínimo de conexiones en el conjunto
      acquire: 30000, // tiempo máximo, en milisegundos, que espera Sequelize para obtener una conexión disponible del conjunto de conexiones
      idle: 10000, // tiempo máximo, en milisegundos, que una conexión puede estar inactiva en el conjunto antes de ser eliminada
    }
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "pool": {
      max: 10, // número máximo de conexiones en el conjunto
      min: 0, // número mínimo de conexiones en el conjunto
      acquire: 30000, // tiempo máximo, en milisegundos, que espera Sequelize para obtener una conexión disponible del conjunto de conexiones
      idle: 10000, // tiempo máximo, en milisegundos, que una conexión puede estar inactiva en el conjunto antes de ser eliminada
    }
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "pool": {
      max: 10, // número máximo de conexiones en el conjunto
      min: 0, // número mínimo de conexiones en el conjunto
      acquire: 30000, // tiempo máximo, en milisegundos, que espera Sequelize para obtener una conexión disponible del conjunto de conexiones
      idle: 10000, // tiempo máximo, en milisegundos, que una conexión puede estar inactiva en el conjunto antes de ser eliminada
    }
  }
}
