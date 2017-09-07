var app = app || {};


app.Animation = (function () {

    var curtain,
        tl1,
        tl2,
        buttonExit,
        cta_arrow,
        cta_txt,
        kick,
        atlas,
        tiguan,
        container;

    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {
        tl1 = new TimelineMax();
        tl2 = new TimelineMax();

        curtain = document.getElementById('curtain');
        buttonExit = document.getElementById('button-exit');
        cta_arrow = document.getElementById('cta_arrow');
        cta_txt = document.getElementById('cta_txt');
        kick = document.getElementById('kick');
        atlas = document.getElementById('atlas');
        tiguan = document.getElementById('tiguan');
        container = document.getElementById('container');

        buttonExit.addEventListener('mouseover', function () {
            TweenMax.to(cta_arrow, .25, {x: 5, ease: Sine.easeOut});
            TweenMax.to(cta_arrow, .25, {x: 0, delay: .25, ease: Sine.easeIn});
        });
    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {
        tl1.to(curtain, .5, {opacity: 0})
            .to(cta_txt, .5, {opacity: 1})
            .to(cta_arrow, .5, {opacity: 1}, "-=.5");

        tl2.from(atlas, 1, {scale:.8, x:"-=150", y:"-=20", ease: Sine.easeOut}, "+=1.5")
            .from(tiguan, 1, {scale:.8, x:"+=150", y:"-=20", ease: Sine.easeOut}, "-=.9");

        TweenMax.to(kick,3,{y:-2484,ease:SteppedEase.config(36)});
        TweenMax.to(container,1,{delay:2, x:+40, ease: Sine.easeOut});
    }

    // --------------------------------------------------------------------------------------
    // Stops the animation
    function stop() {
        console.log("stopping animation");
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return {
        initialize:initialize,
        start:start,
        stop:stop
    }

})();
