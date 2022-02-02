let arr=[1,2,3,4,55,64,735,864,5,6,7,8,999]
let maxValue= 0;
maxValue=arr[0]
for(var i=0;i<arr.length;i++)
{
    if(maxValue<arr[i]){
        maxValue=arr[i]
    }
}
console.log(maxValue)