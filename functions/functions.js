const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () =>  null,
  checkValue: (val) => val,
  createUser: () => {
    const user = {name: 'Raphael', surname: 'Eyerin'}
    return user;
  }
}

module.exports = functions;