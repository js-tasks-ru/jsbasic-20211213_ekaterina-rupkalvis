function filterRange(arr, a, b) {
  let result = arr.filter(function (num){
       if (num >= a && num <= b) {
        return true;
       }
        return false;
  });
  return result;
}