'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    //Add seed commands here.
    await queryInterface.bulkInsert('users ', [{
      uuid:'kjhkjhk24234',
      name: 'John Doe',
      email: 'john@email.com',
      role: 'admin',
      createdAt:'32t',
      updatedAt:'wer'
    }], {});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
