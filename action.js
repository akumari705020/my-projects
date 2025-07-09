// clear rest inputbox after clicking on c button
rbox=document.getElementById('inputt')
cbtn=document.getElementById('cls')
cbtn.addEventListener('click',()=>{
   rbox.value=""
})

//function to get value in inputbox as soon as a button will click

function Val(n)
{
    rbox.value=rbox.value+n
}

//function to get value from inputbox and clear it  

function Result(){
    var r=eval(rbox.value)
    rbox.value=r
}

