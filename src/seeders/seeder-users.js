'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'dhuy221001@gmail.com',
      password:'123456',
      firstName: 'Huy',
      lastName: 'Ngô',
      address:'Da Nang',
      gender:1,
      phoneNumber:'0899244434',
      roleId:'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
