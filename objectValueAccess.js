let obj1={
  name: "babul",
  roll: 33,
  address: "cumilla",
  staus: "available",
}
let obj2={
  name: "rakib",
  roll: 2, 
  address: "rajsahi", 
  staus: "not-available"
}
let obj3={
  name: "akib", 
  roll: 3, 
  address: "khulna", 
  staus: "available"
}
let obj4={
  name: "nokib", 
  roll: 4, 
  address: "barishal", 
  staus: "not-available"
}
let obj5={
  name: "shakib", 
  roll: 1, 
  address: "dhaka", 
  staus: "available"
}
console.log(obj1.name)
obj1.name= "abul"
console.log(obj1.name)


// making array using object
let arrObj=[
  obj1,
  obj2,
  obj3,
  obj4,
  obj5,
]
for(const a of arrObj){
  console.log("Name:",a.name)
  console.log("Roll:",a.roll)
  console.log("Address:",a.address)
  console.log("Status:",a.staus)
  console.log("--------------")
}