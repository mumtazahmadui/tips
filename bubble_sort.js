let arr1 = [3,1,2,7];
let len = arr1.length;
for(let i=0; i<len; i++) {
  for(let j = 0; j < (len - i -1); j++) {
    if(arr1[j] > arr1[j+1]) {
      let swap = arr1[j+1];
      arr1[j+1] = arr1[j];
      arr1[j] = swap;
    }
  }
}
console.log('bubble sort')
console.log(arr1);

