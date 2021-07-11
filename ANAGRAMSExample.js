/* Given two strings, write a function to determine if the second string is an anagram of  the firs.
An Anagram us a word,phrase,or name formed by rearranging the letters of another,
Such as cinema , formed from iceman.*/
/* Example Output */
/* validAnagram('','')//true
   validAnagram('aaz','zza')//False
   validAnagram('cinema','iceman')//True
*/

function validAnagram(first,second){
    if(first.length!== second.length){
        return false;
    }
    
    //Create an object 
    const lookup = {};

    //Loop through first string
    for(let i =0;i<first.length;i++){
        let letter = first[i];
        //If letter exists increment otherwise set to 1
        lookup[letter]?lookup[letter]+=1:lookup[letter]=1;
    }
    console.log(lookup)

    //Loop through the second string 
    for (let i = 0;i<second.length;i++){
        let letter =second[i];
        //If we can't find a letter or letter is zero , then its not an anagram
        if(!lookup[letter]){
            return false;
        }
        else{
            lookup[letter]-=1;
        }
    }

    return true;

}