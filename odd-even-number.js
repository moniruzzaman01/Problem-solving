function getOddEven(number)
{
    if(number%2==0)
    {
        return "This number is Even"
    }
    else{
        return "This number is odd"
    }
}

let number=2
let result=getOddEven(number)
console.log(result)