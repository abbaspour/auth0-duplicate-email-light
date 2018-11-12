function login(username, password, callback) {

    console.log('entering login username: ' + username);

    // call external database to validate username/pass

    return callback(null,   {
      user_id:     '123',       // db.user_ud
      nickname:    username,
      username:    username,
      email:       username + '+' + 'user@example.com' // db.email
    });

}

