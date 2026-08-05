let user={
    "name":"Bhagyesh",
    "password":"12345"
}
// const proxyUser=new Proxy(user,{
//     get(target,prop){
//         console.log(prop);
//         if(prop==="password"){
//             throw new Error("Access Denied");
//         }
//         return target[prop]
//     },
//     set(target,prop,user){}
// })
// console.log(proxyUser.password)


function negativeIndex(arr){
    return new Proxy(arr,{
        get(target,prop){
            const index=Number(prop)
            if(index<0){
                return target[target.length+index]
            }
            return target[index]
        },
        set(target,prop,value){
            const index=Number(prop)
            if(index<0){
                target[target.length+index]=value
            }else{
                target[index]=value
            }
            return true
        }
    })
}
const arr=negativeIndex([10,20,30,40,50])
console.log(arr[-2])