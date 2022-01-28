function getMinMax(str) {
  let arr = str.split(' ');
  let arrNum = arr.map(function (el) {
     let num = Number(el);
     return num;
  });
  let arrNumFilter = arrNum.filter(function (el) {
    if (!isNaN(el)) {
       return true;
    } 
    return false;
  });
  let maxNum = Math.max.apply(null, arrNumFilter);
  let minNum = Math.min.apply(null, arrNumFilter);
  let result = {};
  result.min = minNum;
  result.max = maxNum;
  return result;
}