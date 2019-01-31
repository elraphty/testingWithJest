const axios = require('axios');

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () =>  null,
  checkValue: (val) => val,
  createUser: () => {
    const user = {name: 'Raphael', surname: 'Eyerin'}
    return user;
  },
  fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
  .then(res => {
    // console.log(res.data);
    return res.data
  })
  .catch(err => 'error'),
  fetchAnotherUser: () => axios.get('https://jsonplaceholder.com.typicode.com/users/1')
  .then(res => {
    // console.log(res.data);
    return res.data
  })
  .catch(err => 'error'),

}

module.exports = functions;