//select progress value, progressbar
let progressbar=document.querySelector(".progressbar")
let progressvalue=document.querySelector(".progressvalue")
//declare values of speed,progressstart,progressend
var progressstart=0;
var progressend=90;
var speed=50;

let progress=setInterval(()=>{
    progressstart++;

    progressvalue.textContent=`${progressstart}`+"%";

    progressbar.style.background=`conic-gradient(#7d2ae8 ${progressstart * 3.6}deg , #ededed 0deg)`;

    if(progressstart==progressend)
    {
        clearInterval(progress);//if the starting value equal to ending value interval cleared.
    }
},speed)