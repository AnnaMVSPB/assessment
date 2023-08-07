'use strict';

const { Duck } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Duck.bulkCreate([
      {
        name: 'Утка-программист',
        img: 'https://friendfunction.ru/upload/iblock/a1a/6oxx9jms21zf0yc5zm43tqg2nwuloptw/44b61de1d474c700ec0ba9efbec6f974.JPG',
      },
      {
        name: 'Утка-королева',
        img: 'https://bugaga.ru/uploads/posts/2015-02/1423486122_rezinovye-utochki-8.png',
      },
      {
        name: 'Утка-Иисус',
        img: 'https://bugaga.ru/uploads/posts/2015-02/1423486085_rezinovye-utochki.jpg',
      },
      {
        name: 'Кит?????',
        img: 'https://media.istockphoto.com/id/1092678762/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%B0%D0%B7%D0%BC%D1%8B%D1%82%D0%B8%D0%B5-%D1%80%D0%B5%D0%B7%D0%B8%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BA%D0%B8%D1%82-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%B9-%D0%BF%D0%B5%D0%BD%D0%B5-%D0%B2-%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B9.jpg?s=612x612&w=0&k=20&c=uRWz55xQHsoU0gWp9tq4IOEFPZ4w0rbp2BUc1B-hFbI=',
      },
      {
        name: 'Утка-чёрт',
        img: 'https://friendfunction.ru/upload/iblock/dc4/vgb7nnftqs09neayoqhwnxe3okl1du13/0c20a91ce3c27a3e781eea051152c329.jpg',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Duck.destroy();
  },
};
