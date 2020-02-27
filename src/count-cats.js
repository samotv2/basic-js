module.exports = function countCats(arr) {
  throw 'Not implemented';
  let sum=0;
  let arr1 =[];
  for( let i=0; i<arr.length; i++){
arr1=arr[i];
for (let j=0; j<arr1.length; j++){
  if (arr1[j] != '^^') continue;
  sum++;
}
  }
};
