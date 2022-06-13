module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
      auth: false
    },
  },

  {
    method: 'GET',
    path: '/find',
    handler: 'todo.find',
    config: {
    policies: [],
    auth: false
    },
  },
]; 
