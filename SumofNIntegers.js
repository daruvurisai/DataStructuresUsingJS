/* Description : This Program takes an input of 'n' Numbers 
adds them and returns the total sum for that n numbers
e.g addUpTo(4) gives the output of 10 */
//1st implementation
function addUpTo(n){
    let total = 0;
    for (let i =0;i<=n;i++){
        total+=i;

    }
    return total;
}
console.log(addUpTo(4));

//2nd Implementation
function add(n){
    return n*(n+1)/2;
}
console.log(add(4));

