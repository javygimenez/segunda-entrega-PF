require('dotenv').config()
const server = require('../server.js');
const initMongoDB = require('./database');


const init = async () => {
    await initMongoDB();
    const puerto = process.env.PORT || 8080;
  
    server.listen(puerto, () => console.log(`SERVER UP ON PORT ${puerto}`));
  };
  
  init();