let jet = document.getElementById('jet');
let container = document.getElementById('box');   
window.addEventListener('keydown',(e)=>{
    let left = parseInt(window.getComputedStyle(jet).getPropertyValue('left'));
    if(e.key=='ArrowLeft' && left>0){
        jet.style.left = left - 10 +"px";
    }
    if(e.key=='ArrowRight' && left<480){
        jet.style.left = left + 10 +"px";
    }
    if(e.key == 'ArrowUp' || e.keyCode==32){
        let bullet = document.createElement('div')
            bullet.classList.add('bullet')
            container.appendChild(bullet);
        let fireBullet = setInterval(()=>{
            let bulletBottom = parseInt( window.getComputedStyle(bullet).getPropertyValue('bottom'))
            bullet.style.bottom = bulletBottom + 3 +"px"   
            bullet.style.left=left+"px"
                
            
            let oponents = document.getElementsByClassName('opponent')
                for (const i in oponents) {
                   let oponnent = oponents[i];
                   
                   let oponnentBound = oponnent.getBoundingClientRect();
                   let bulletBound = bullet.getBoundingClientRect();
                   if(bulletBound.left >= oponnentBound.left &&
                      bulletBound.right <= oponnentBound.right &&
                      bulletBound.top <= oponnentBound.top && 
                      bulletBound.bottom <= bulletBound.bottom){
                        oponnent.parentElement.removeChild(oponnent)
                    }
                }
               
  
            })
    }

});

let generateOponent = setInterval(()=>{
    let oponnent = document.createElement('div');
    oponnent.classList.add('opponent');
    let oponnentLeft = parseInt(window.getComputedStyle(oponnent).getPropertyValue('left'));

    oponnent.style.left = Math.floor(Math.random()*450)+"px";
    // console.log(oponnentLeft);
    container.appendChild(oponnent);

},1500);



let moveOpponent = setInterval(()=>{
    let oponents = document.getElementsByClassName('opponent')
    if(oponents!=undefined){
        for (const i in oponents) {
           let element = oponents[i];
           let elementTop = parseInt(window.getComputedStyle(element).getPropertyValue('top'));

           element.style.top = elementTop + 10 +"px";
           if(elementTop == 460){
            alert('Game over')
            element.remove()
           }
        }
    }
},450);



