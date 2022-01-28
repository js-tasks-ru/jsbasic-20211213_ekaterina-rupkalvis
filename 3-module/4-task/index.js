function showSalary(users, age) {
  let result = users.filter(function (user) {
      if (user.age <= age) {
        return true;
      } 
      return false;
  });
  let usersFiltered = result.map(function (users) {
       return users.name + ', ' + users.balance;
  });
 return usersFiltered.join('\n');
}