function namify(users) {
  let usersNames = []; 
  for ( i = 0; i < users.length; i++) {
     usersNames.push(users[i].name);
  }
  return usersNames;
}