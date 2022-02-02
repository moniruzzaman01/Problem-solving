let arr=[1,2,3,4,55,64,5,7,5,6,7,8,999]
console.log("main array:",arr)

function rmvDuplicate1(array){
    for(var i=(arr.length-1);i>=0;i--)
{
    element=arr[i]
    for(var j=(i-1);j>=0;j--)
    {
        if(element==arr[j])
        {
            arr.splice(arr.indexOf(arr[j]),1)
        }
    }
}
return arr;
}
let newArray1=rmvDuplicate1(...arr)
console.log("New Array1:",newArray1)





function rmvDuplicate2(array){
    let newArr =[]
    for(var i=0;i<arr.length;i++)
{
    element=arr[i]
    if(newArr.indexOf(element) == -1){
        newArr.push(element)
    }
}
return newArr;
}

console.log("new array2:",newArr)