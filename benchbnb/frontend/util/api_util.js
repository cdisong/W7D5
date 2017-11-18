const createUser = $.ajax({
  url: '/api/users',
  method: 'POST',
  data: {
    user: {
      username: 'bob',
      password: 'password'
    }
  }
}).then(response => console.log("response", response));

const logIn = $.ajax({
  url: '/api/session',
  method: 'POST',
  data: {
    user: {
      username: 'bob',
      password: 'password'
    }
  }
}).then(response => console.log("response", response));

const logOut = $.ajax({
  url: '/api/session',
  method: 'DELETE'
}).then(response => console.log("response", response));
