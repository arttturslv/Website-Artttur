
/**var that control if the drowpdown menu is open or not.*/
var isMenuMobileOpen = false;

/**var that control what color the document are, true if is light, false if is dark.*/
var lightMode = true;


//These are the ball element of the switch svg.
var BolaSwitchDesktop = document.getElementById("bola-desktop");
var BolaSwitchMobile = document.getElementById("bola-mobile");


//these are the frames of the caricature animation
var caricaturaFrame1 = document.getElementById("arturMov1");
var caricaturaFrame2 = document.getElementById("arturMov2");
var caricaturaFrame3 = document.getElementById("arturMov3");

//these are the switch elements that changes the color mode
var switchDesktop = document.getElementById("switch-desktop");
var switchMobile = document.getElementById("switch-mobile");    


/**
 * Function that receives a link then open in a _blank window using "window.open(link)"
 * @param {*} link is a text.
 */
function openLink (link) {
    window.open(link);
}

/**
 * Function that verify the variable "isMenuMobileOpen", if has value "true" hides the mobile drowpdown, else shows it.
 */
function switchMenu() {
    let menuMB = document.getElementsByClassName('menu-mobile')[0];
    if (isMenuMobileOpen) {
        menuMB.style.display = "none";
        isMenuMobileOpen = false;
    } else {
        menuMB.style.display = "block";
        isMenuMobileOpen = true;
    }
}

/**
 * Function that switches the document color from dark to light and light to dark. Also changes the switch button and caricature color, animating them too. 
 * The function also disable the switch element for a limited time while the animation is running.
 */
function switchColorMode() {
    switchDesktop.style.pointerEvents = 'none';
    switchMobile.style.pointerEvents = 'none';

    if (!lightMode) {
        document.documentElement.style.setProperty("--light", "#E5E5E5");
        document.documentElement.style.setProperty("--dark", "#2F2F2F");

        BolaSwitchDesktop.style.transform = "translate(0%,0px)"
        BolaSwitchMobile.style.transform = "translate(0%,0px)"
        lightMode = true;

        onAnimation(caricaturaFrame3, caricaturaFrame2, caricaturaFrame1);
    } else if (lightMode) {
        document.documentElement.style.setProperty("--dark", "#E5E5E5");
        document.documentElement.style.setProperty("--light", "#2F2F2F");

        BolaSwitchDesktop.style.transform = "translate(35px,0px)"
        BolaSwitchMobile.style.transform = "translate(36px,0px)"

        lightMode = false;

        onAnimation(caricaturaFrame1, caricaturaFrame2, caricaturaFrame3);
    }
}

/**
 * Function that uses setTimeout to make animations, it receives three variables and show the first, after some time, hides the first and shows the second, then hides the second and shows the third one.
 * @param {*} caricaturaFrame1 - SVG image that correspond the 1º frame of the animation.
 * @param {*} caricaturaFrame2 - SVG image that correspond the 2º frame of the animation.
 * @param {*} caricaturaFrame3 - SVG image that correspond the 3º frame of the animation.
 */
function onAnimation(caricaturaFrame1, caricaturaFrame2, caricaturaFrame3) {
    setTimeout(function(){
        caricaturaFrame1.style.display = "block";
    }, 500);

    setTimeout(function(){
        caricaturaFrame1.style.display = "none";
        caricaturaFrame2.style.display = "block";
    }, 1000);

    setTimeout(function(){
        caricaturaFrame2.style.display = "none";
        caricaturaFrame3.style.display = "block";
        switchDesktop.style.pointerEvents = 'auto';
        switchMobile.style.pointerEvents = 'auto';
    }, 1500);
}


SVGInject.setOptions({
    onFail: function(img, svg) {
      // if injection fails show the img element
      img.classList.remove('injectable');
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    // inject all img elements with class name `injectable`
    SVGInject(document.querySelectorAll('img.injectable'), {
      onAllFinish: function() {
        // the SVG injection has finished for all three images

      }
    });
  });