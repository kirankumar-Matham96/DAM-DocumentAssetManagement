const userControl = require('../controller/user');

module.exports = (app) => {
  app.post('/registerNewUser', userControl.registerUser);
  app.get('/Users', userControl.getUsers);
  app.post('/loginUser', userControl.userLogin);
  
  /*  Need a strategy to use and optimize forgot and reset password APIs */
  // app.get('/forgotPassword', userControl.forgotPassword);
  // app.get('/resetPassword', userControl.resetPassword);
};
