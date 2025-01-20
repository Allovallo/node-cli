const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");
console.log(contactsPath);

const getAll = async () => {};

const getById = async () => {};

const add = async () => {};

const remove = async () => {};

module.exports = {
  getAll,
  getById,
  add,
  remove,
};
