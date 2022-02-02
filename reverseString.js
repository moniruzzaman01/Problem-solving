const str="hello, mada faka. how are you?"
console.log("Initial string:",str)

let str1=[]
for(var i=(str.length-1);i>=0;i--){
    str1.push(str[i])
}
finalStr=str1.join("")
console.log("Final string1:",finalStr)

// ---------------------------------------

let str2=''
for(const letter of str)
{
    str2=letter+str2;
}
console.log("Final string2:",str2)
