let a;
let date;
let time;
let day;
const options ={weekday:'long', year:'numeric',month:'long',day:'numeric'};

setInterval(() =>{
    a=new Date();
    date=a.toLocaleDateString(undefined,options);
    time=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
    document.getElementById('time').innerHTML=time;
    document.getElementById('date').innerHTML=date;
    document.getElementById('day').innerHTML=day;
},1000);