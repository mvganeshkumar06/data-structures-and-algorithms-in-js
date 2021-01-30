/*

Min Heap + Map

Time - O(nlogk)
Space - O(n)

*/

const MinHeap = require("../../data-structures/min-heap.js");

const topKFrequent = function(nums, k) {
    
    const map=new Map();
    
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
        }
        else{
            map.set(nums[i],1);
        }
    }
    
    const minHeap = new MinHeap();
    
    for(let key of map.keys()){
        const currObject={};
        currObject.key=map.get(key);
        currObject.value=key;
        minHeap.insert(currObject);
        if(minHeap.getSize()>k){
            minHeap.deleteMin();
        }
    }
    
    const output=[];
    
    while(minHeap.getSize()>0){
        output.push(minHeap.getMin());
        minHeap.deleteMin();
    }
    
    return output;
};