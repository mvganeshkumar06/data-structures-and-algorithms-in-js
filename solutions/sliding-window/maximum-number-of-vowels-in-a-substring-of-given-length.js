/*

Brute force

Time - O(n^2)
Space - O(1)

*/

const isVowel=(ch)=>{
    return ch==="a" || ch==="e" || ch==='i' || ch==="o" || ch==="u";
}

const maxVowels = function(s, k) {
    
    let currCount=0, maxCount=0;
    
    for(let i=0;i<s.length;i++){
        for(let j=i;j<s.length;j++){
            if(isVowel(s[j])){
                currCount++;
            }
            else{
                break;
            }
        }
        maxCount=Math.max(maxCount,currCount);
        currCount=0;
    }
    
    return maxCount;
    
};

/*

Sliding window

Time - O(n)
Space - O(1)

*/

const maxVowels2 = function(s, k) {
    
    let i=0,currCount=0,maxCount=0;
    
    for(let j=0;j<s.length;j++){
        if(isVowel(s.charAt(j))){
            currCount++;
        }
        if(j-i+1===k){   
            maxCount=Math.max(maxCount,currCount);
            if(isVowel(s.charAt(i))){
                currCount--;
            }
            i++;
        }
    }
    
    return maxCount;
    
};