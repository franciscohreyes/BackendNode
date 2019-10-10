const store = require('./store');

function addUser(name) {
  return new Promise((resolve, reject) => {
    if(!name){
      console.log("[user Controller]");
      return Promise.reject('Invalid name');
    }

    const user = {
      name,
    };

    store.add(user);
    resolve(user);
  });
}

function getUsers() {
  return store.list();
}

module.exports = {
  addUser,
  getUsers
}