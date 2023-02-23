let txter =document.getElementById("txter");
let decer =document.getElementById("decer");
let limiter =document.getElementById("limiter");

let adderer=0;
let end ;

const adder =()=>{
    if(adderer>=end){
        adderer=0;
    }

    adderer+=1;
    txter.innerHTML = adderer
    if(adderer>0){
        decer.style.visibility= "visible"
    }
}
const dec =()=>{
    adderer-=1;
    txter.innerHTML = adderer;
    if(adderer==0 || adderer <0){
        decer.style.visibility= "hidden"
    }
}
const res =()=>{
    adderer =0;
    txter.innerHTML = adderer;
    if(adderer==0 || adderer <0){
        decer.style.visibility= "hidden"
    }
}   


const getter = () => {
    if(limiter.value>=1){
        
        end= limiter.value;
        console.log(limiter.value)
    }
}
const clr =()=>{
    end=undefined;
    limiter.value="";
    res()
    // window.location.reload()
}