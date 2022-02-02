let arr=[1,3,2,5,64,6,456,67,6869,56,4534,-2342,-34,345,465,56,34,-56,5,345]
console.log(arr)
let positiveArr=[]
let negativeArr=[]
for(const a of arr){
    if(a>=0){
        positiveArr.push(a)
    }
    else{
        negativeArr.push(a)
    }
}
console.log(positiveArr)
console.log(negativeArr)