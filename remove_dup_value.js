let arr1 = [1,2,3,1,2,6,7];

function removeDuplicates(arr){
    let unique_array = [];
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array
}

console.log('Unique value : ' + removeDuplicates(arr1));