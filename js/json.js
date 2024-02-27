const user = {id:1,name:'tiger sorif',job:'actor'};
const stringified=JSON.stringify(user);
// console.log(stringified);
// console.log(user);

const shop={
    owner:'khalid',
    address:{
        street:'jani na',
        city:'kushtia',
        country:'BD',
    },
    product:['laptop','mic','mouse','keyboard'],
    revenue:50000,
    isOpen:true,
    isNew:false,
}
console.log(shop);
const shopJson=JSON.stringify(shop);
console.log(shopJson);
// console.log(typeof shop);
// console.log(typeof shopJson);

const shopObj=JSON.parse(shopJson);
console.log(shopObj);