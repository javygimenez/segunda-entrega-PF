const mongoose = require('mongoose');

const connectionString = process.env.MONGO_ATLAS_SRV || 'mongodb://localhost:27017/miBase'

const initMongoDB = async () => {
  try {
    console.log('CONECTANDO A MI DB');
    console.log(connectionString)
    await mongoose.connect(connectionString);

    console.log('YA ESTOY CONECTADO');
  } catch (error) {
    console.log(`ERROR => ${error}`);
    return error;
  }
};

module.exports = initMongoDB;