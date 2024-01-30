let bc= document.querySelector("#bc");
let b = document.querySelector("#b");
let b2 = document.querySelector("#b2");
let bg = document.querySelector("#bg");
let l = document.querySelector("#l");
let clicked = false;
let rbc = document.querySelector("#bottleCapOff");
let lo = document.querySelector("#LaserOn");

let text = "";

function updateText(){
    document.querySelector("#inf").innerHTML = text;
}

checkOrientation();
function checkOrientation(){
    if (window.orientation === 0 || window.orientation === 180) {
        document.querySelector("#bbb").setAttribute("class","me");
        document.querySelector("#bbb").innerHTML+="<img src='./images/info.png'>";
      } else {
        document.querySelector("#bbb").setAttribute("class","");
        document.querySelector("#bbb").innerHTML="";
      }
  
}

window.addEventListener("orientationchange", checkOrientation);

bc.addEventListener("click",()=>{
    bg.src="./images/BG_set1.png";
    bc.style.transform = `scale(1.4)`;
    bc.style.opacity=0.6;
    b.disabled=false;
    text="Place it on the given position";
    updateText();
    bc.removeEventListener("click");
});

b.onclick = function(){
    bg.src="./images/BG1.png";
    bc.src="";
    bc.style.opacity=0;
    b.disabled=true;
    document.getElementById("carrier").innerHTML="";
    clicked = true;
    text = "Now Place the laser";
    updateText();
}

l.addEventListener("click",()=>{
    if(clicked){
        bg.src="./images/BG_set2.png";
        l.style.transform=`scale(1.4)`;
        b2.disabled=false;
        l.style.opacity=0.6;
        l.removeEventListener("click");
    }
});

b2.onclick = function(){
    if(clicked){
        bg.src="./images/BG2.png";
        l.src="";
        b2.disabled=true;
        document.getElementById("carrier2").innerHTML="";
        document.getElementById("bar").innerHTML="";
        document.getElementById("bar").style.opacity=0;
        document.querySelector("#information").style.left = "5%";
        document.querySelector("#information").style.height = "30vh";
        document.querySelector("#information").style.top = "25%";
        
        rbc.style.opacity=1;
        lo.style.opacity=0;
        
        bg.style.height='100vh'

        text="Now Remove the Bottle Cap";
        updateText();

    }
}

rbc.addEventListener("click",()=>{
    if(rbc.style.opacity>0){
        bg.src="./images/BG3.png";
        rbc.style.opacity=0;
        rbc.style.zIndex=8888;
        lo.style.zIndex=9999;
        lo.style.opacity=1;
        text="Upon removal of the bottle cap, atmospheric pressure pushes the water out of the bottle";
        updateText();
        document.querySelector("#information").style.height = '40vh';
    }
});
    
lo.addEventListener("click",()=>{
    if(lo.style.opacity>0){
        bg.src="./images/BG4.png";
        lo.style.opacity=0;
        text = "Now zoom in to experience Total Internal Reflection";
        updateText();
        document.querySelector("#information").style.height = "30vh";
        rbc.innerHTML="";
        lo.innerHTML="";
    }
});