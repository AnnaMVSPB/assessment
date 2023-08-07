const express = require('express');

const config = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};

module.exports = config;
