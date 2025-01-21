const { program } = require("commander");

const contacts = require("./db");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.getAll();
      return console.log(allContacts);
    case "get":
      const oneContact = await contacts.getById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await contacts.add({ name, email, phone });
      return console.log(newContact);
    case "remove":
      const removeContact = await contacts.remove(id);
      return console.log(removeContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

invokeAction(options);
