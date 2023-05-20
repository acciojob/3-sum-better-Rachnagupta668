function threeSum(arr, target) {
// write your code here
	nums.sort((a,b)(a-b)){
		colsesum=infiniye;
		for(int i =0; i<arr.length;i++){
			left=i+1;
			
			right=arr.length-1;
							while(left<right){

			const sum=arr[i]+arr[left]+arr[right];
			if(Math.abs(sum-target)<Math.abs(colssum-target)){
				sum=colsesum;
			}
								if(sum<target){
									left++;
									
								}else{
									right--;
								}
			}
		}
	}
  return colsesum;
}

module.exports = threeSum;
