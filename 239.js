const maxSlidingWindow = function(nums, k) {
    let length = nums.length
    let resultArray = []
    let helperArray = []
    for(let i = 0; i < length; i++){
        if(helperArray.length !== 0){
            if(helperArray[0][1] < i - (k - 1)){
                helperArray.shift()
            }
            if(nums[i] > helperArray[0][1]){
                helperArray = []
                helperArray.push([nums[i], i])
            } else {
                while(helperArray[helperArray.length - 1][0] < nums[i]){
                    helperArray.pop()
                }
                helperArray.push([nums[i],i])
            }
        } else {
            helperArray.push([nums[i],i])
        }
        if(i >= k - 1){
            resultArray.push(helperArray[0][0])
        }
    }
    return resultArray
}

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))