let scr=document.querySelector('.screen')
let num=document.querySelectorAll('.key')
let opt=document.querySelectorAll('.opt')
let bk=document.querySelector('.bk')
let eql=document.querySelector('.eql')
let clr=document.querySelector('.clr')

let a='';
num.forEach(element => {
    element.addEventListener('click',function(){
        console.log(element.innerHTML)
        a+=element.innerText;
        scr.value=a;
        console.log(a.length)
    })
});

opt.forEach(element=>{
    element.addEventListener('click',function(){
        console.log(element.innerHTML)
        if(element.innerHTML == 'r'){
            a=a**0.5;
            scr.value=a;
        }else{
            a +=element.innerText;
            scr.value=a;
        }
    })
})

bk.addEventListener('click',()=>{
   a=a.slice(0,a.length-1);
   scr.value=a;
})

eql.addEventListener('click',()=>{
    a=eval(a);
    scr.value=a;
})

clr.addEventListener('click',()=>{
    scr.value="";
    a='';
})
