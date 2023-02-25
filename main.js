/**slid social media */

var sidBar=document.querySelector(".SidbarContainer");
      sidBar.addEventListener('click',e=>{
        sidBar.classList.toggle("index")
        
      })


/** explore btn */
//buttons
const allbtn=document.getElementById("allbtn")
const pullbtn=document.getElementById("pullbtn")
const pushbtn=document.getElementById("pushbtn")
const skillbtn=document.getElementById("skillbtn")
const routinbtn=document.getElementById("routinbtn")
//cards
const all=document.querySelectorAll('.exo')
const pull=document.querySelectorAll('.pull')
const push=document.querySelectorAll('.push')
const skill=document.querySelectorAll('.skils')
const routins=document.querySelectorAll('.routins')


allbtn.addEventListener('click',e=>{
    all.forEach(e=>{
        e.style.display="block"
    })
})

pullbtn.addEventListener('click',e=>{
    all.forEach(e=>{
        e.style.display="none"
    })
    pull.forEach(e=>{
        e.style.display="block"
    })
    
})
pushbtn.addEventListener('click',e=>{
    all.forEach(e=>{
        e.style.display="none"
    })
    push.forEach(e=>{
        e.style.display="block"
    })
})
skillbtn.addEventListener('click',e=>{
    all.forEach(e=>{
        e.style.display="none"
    })
    skill.forEach(e=>{
        e.style.display="block"
    })
})
routinbtn.addEventListener('click',e=>{
    all.forEach(e=>{
        e.style.display="none"
    })
    routins.forEach(e=>{
        e.style.display="block"
    })
})