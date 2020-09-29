module.exports = function countCats(arr) {
 
  let sum=0;
  let arr1 =[];
  for( let i=0; i<arr.length; i++){
arr1=arr[i];
if (arr[i] == '^^') 
  sum++;
for (let j=0; j<arr1.length; j++){
  if (arr1[j] != '^^') continue;
  sum++;
}
  }
  return sum;
};
/*module.exports = function countCats(arr) {
  let sum=0;
  
  for(let i=0; i<rows; i++)
  arr[i]=new Array;
  {
   if (arr[i] == '^^') 
  sum++;
//arr1=arr[i];
for (let j=0; j<columns; j++)
arr[j]= new Array;
{
  if (arr[j] == '^^') 
  sum++;
  //if (arr [i][j]=='^','^')
  //sum++;
}
  }
  return sum;
};*/