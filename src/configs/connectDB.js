const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sern', 'root', null, {
  host: 'localhost',
  dialect:'mysql',
  logging: false, //để không bị in ra dong query
});

const connectDB = async()=>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
export default connectDB;