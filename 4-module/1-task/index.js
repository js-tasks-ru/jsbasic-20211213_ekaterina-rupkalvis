function makeFriendsList(friends) {
  let ulList = document.createElement('ul');
      ulList.innerHTML = friends.map(function(obj){
         return ('<li>' + obj.firstName + ' ' + obj.lastName + '</li>')
      });
   return ulList;
}