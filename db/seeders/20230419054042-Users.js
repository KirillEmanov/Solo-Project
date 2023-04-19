'use strict';
const array = [
  {
    name: "Сергей Мазаев",
    email: "podkapot@magia.ge",
    password: "1",
    role: true,
  },
  {
    name: "Денис Образцов",
    email: "proverim@podkapot.ru",
    password: "2",
    role: false,
  }
]
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', array, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
