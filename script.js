var mobileStatus = false;

function switchMenu() {
    let menuMB = document.getElementsByClassName('menu-mobile')[0];
    if (!mobileStatus) {
        console.log("1" + mobileStatus);
        menuMB.style.display = "block";
        mobileStatus = true;
    } else {
        menuMB.style.display = "none";
        mobileStatus = false;
    }
}
let imgs = document.getElementById("eu");
var bola = document.getElementById("bola");

var dark = false;
function switchColorMode() {
    if (dark) {
        console.log("a")
        document.documentElement.style.setProperty("--light", "#E5E5E5");
        document.documentElement.style.setProperty("--dark", "#2F2F2F");
        imgs.src="./assets/persona/p1.svg";
        bola.style.transform = "translate(0%,0px)"
        dark = false;
    } else {
        console.log("b")
        document.documentElement.style.setProperty("--dark", "#E5E5E5");
        document.documentElement.style.setProperty("--light", "#2F2F2F");
        imgs.src="./assets/persona/p2.svg";
        bola.style.transform = "translate(35px,0px)"
        dark = true;
    }
}

var container = document.getElementById("container-skills");
                let conteudo = '';
                for (let i = 1; i < 11; i++) {
                    let skillIMG = `<div class="sk"> <svg width='109' height='110' viewBox='0 0 109 110' version='2.0'> <use href="#${'skill' + i}"/> </svg> </div>`
                    conteudo += skillIMG;
                }
                document.getElementById("container-skills").innerHTML = conteudo;


                var imgCima = document.getElementById('a');
                var imgEfeito = document.getElementById('b');
    
                imgCima.addEventListener("mouseover", hoverImgEffect);
                imgCima.addEventListener("mouseout", mouseOutEffect);
    
    
                function mouseOutEffect() {
                    imgCima.style.filter = 'none'
                }
    
                function hoverImgEffect() {
                    imgCima.style.filter = 'blur(1px)'
                }


let icon = '<svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg><path d="M3 27H42.9399" stroke="#2F2F2F" stroke-width="6" stroke-linecap="round"/>            <path d="M3.06006 14.9441H42.9999" stroke="#2F2F2F" stroke-width="6" stroke-linecap="round"/> <path d="M3.06006 3H42.9999" stroke="#2F2F2F" stroke-width="6" stroke-linecap="round"/></svg>'



