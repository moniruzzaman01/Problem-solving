function findPrimeNumber(number)
{
    if(number==1 || number==2|| number==0)
        {
            return "This number is not prime"
        }
    for(var i=2;i<number;i++)
    {
        if(number%i==0)
        {
            return "This number is prime"
        }
        else{
            return "This number is not prime"
        }
    }
}

let number=50;
let result=findPrimeNumber(number)
console.log(result)