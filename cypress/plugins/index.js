/// <reference types="cypress" />

const faker = require("faker");

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
  on("task", {
    freshUser() {
      user = {
        id: faker.id.id(),
        email: faker.internet.email(),
        name1: faker.name1.firstName(),
        name2: faker.name2.lastName(),
        password: faker.internet.password(),
        avatar: "avatar"
      };
      return user;
    }
  })
  return config
}
