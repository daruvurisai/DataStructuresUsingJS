/*Write a function called same , which accepts 2 arrays,
The function should return true if every value in the array has its corresponding , 
values squared in the second array.The Frequency of values must be the same.*/

//Naive Solution

function same(arr1,arr2){
    if(arr1.length!==arr2.length){
        return false;

    }

    for (let i = 0;arr1.length;i++){
        let correctindex= arr2.indexof(arr1[i]*2)
        if(correctindex===-1){
            return false;
        }
        arr2.splice(correctindex,1)

    }
    return true

}