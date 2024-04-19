



const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var mincurcul = document.querySelector("#minicurcul")
var timeout;
function curclskew() {
    xscall = 1;
    yscall = 1;

    xpriv = 0;
    ypriv = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout)
        var xdiff = dets.clientX - xpriv
        var ydiff = dets.clientY - ypriv

        xpriv = dets.clientX
        ypriv = dets.clientY

        xscall = gsap.utils.clamp(0.9,1.1, xdiff)
        yscall = gsap.utils.clamp(0.9,1.1, ydiff)

        mousemove(xscall, yscall);

        timeout = setTimeout(function () {
            mincurcul.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1)`
        }, 100)
    })
}

function mousemove(xscall, yscall) {
    window.addEventListener("mousemove", function (dets) {
        mincurcul.style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xscall}, ${yscall})`
    })
}



function pg1anim() {
    var tl = gsap.timeline();

    tl.to(".boundingtxt", {
        y: 0,
        ease: Expo.ease,
        stagger: 0.3,
    })

    tl.from("#nav", {
        y: 10,
        opacity: 0,
        duration: 1,
        ease: Expo.easein,
    })
    tl.from("#herofooter", {
        y: 10,
        opacity: 0,
        // duration: 1,
        ease: Expo.easein,
    })

    var adgsthr;
 
    document.querySelectorAll(".linhov").forEach(function(eleem){
        eleem.addEventListener("mouseenter",function(){
            gsap.to(eleem.querySelector("hr"),{
                opacity:1,
                x:"0%",
            })
            clearTimeout(adgsthr)
        })
        eleem.addEventListener("mouseleave",function(){
                gsap.to(eleem.querySelector("hr"),{
                    x:"100%",
                    duration:.2
                })
                setTimeout(function(){
                    gsap.to(eleem.querySelector("hr"),{
                        opacity:0,
                        x:"-100%",
                        duration: -10
                    })
                },200)
        })
    })


}


mousemove();
curclskew();
pg1anim();

var rotat = 0;
var rotatdiff = 0;
var setrotatdiff;

document.querySelectorAll(".elem").forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
        var topdiff = dets.clientY - elem.getBoundingClientRect().top
        rotatdiff = dets.clientX - rotat;
        rotat = dets.clientX
        setrotatdiff = gsap.utils.clamp(-20, 20, rotatdiff * 0.8)
        
        document.querySelector("#minicurcul").style.width = "70px"
        document.querySelector("#minicurcul").style.height = "70px"
        document.querySelector("#minicurcul").style.mixBlendMode = "normal"
        document.querySelector("#minicurcul").innerHTML = "view"

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            left: dets.clientX,
            top: topdiff,
            rotate: setrotatdiff
        })
        gsap.to(elem.querySelector("h1"), {
            x: 40,
            opacity: ".2",
        })
        gsap.to(elem.querySelector("h5"), {
            opacity: ".3",
        })


    })
    elem.addEventListener("mouseleave", function (dets) {

        document.querySelector("#minicurcul").style.width = "13px"
        document.querySelector("#minicurcul").style.height = "13px"
        document.querySelector("#minicurcul").style.mixBlendMode = "difference"
        document.querySelector("#minicurcul").innerHTML = ""

        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
        })

        gsap.to(elem.querySelector("h1"), {
            x: 0,
            opacity: ".7",
        })
        gsap.to(elem.querySelector("h5"), {
            opacity: "1",
        })
    })
})
