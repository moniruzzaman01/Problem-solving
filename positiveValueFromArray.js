let arr=[1,3,2,5,64,6,456,67,6869,56,4534,-2342,-34,345,465,56,34,-56,5,345]
let positiveArr=[]
for(const a of arr){
    if(a>=0){
        positiveArr.push(a)
    }
    else{
        break
    }
}
console.log(positiveArr)