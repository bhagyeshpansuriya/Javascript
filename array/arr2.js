const colors=["red","yellow","black"];

colors[5]="purple";

colors.forEach((item,index)=>{
    console.log(`${index}:${item}`);
})
colors.reverse();