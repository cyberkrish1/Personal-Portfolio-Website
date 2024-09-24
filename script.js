const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var timeout;
function circleChaptaKaro() {
    //define default scale value
    var yscale = 1;
    var xscale = 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function (dets) {
        this.clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev)
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev)

        xprev = dets.clientX;
        yprev = dets.clientY;
        circleMouseFollower(xscale, yscale)
        timeout = setTimeout(function () {
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${1},${1})`//optional 
        }, 100)

    })
}

function firstPageAnim() {
    var t1 = gsap.timeline()
    t1.from('#nav', {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut

    })
        .to('.boundingelem', {
            y: 0,

            duration: 1,
            ease: Expo.easeInOut,
            stagger: .2,
            delay: -1

        })
        .from('#herofooter', {
            y: -10,
            opacity: 0,
            duration: 1.5,
            ease: Expo.easeInOut,
            delay: -1

        })
}

function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        this.document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`
    })
}



firstPageAnim()
circleMouseFollower()
circleChaptaKaro()

//image show karne ke liye
//teeno element ko select karo,uske baad teeno par ek mousemove
//lagao,jab ,mousemove hotto ye pata karo ki mouse kaha par hai
//jiska matlb hai mouse ki x and y position pata karo
//ab mouse ki x and y position ke badle us image ko shoe karo and us image ko move karo,move karo
//move karte waqt rotate karo and jaise jaise mouse tez chale waise waise rotation bhi tej ho jaye



document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
    });

    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
    });
});

// let myDate=new Date()
// let curr_time=myDate.toDateString()

// console.log(curr_time)
// document.getElementById("currenttime").innerText=curr_time

//current time
setInterval(function () {
    let myDate = new Date()
    let curr_time = myDate.toLocaleTimeString()
    document.getElementById("currenttime").innerText = curr_time
    console.log(curr_time)

}, 100)

