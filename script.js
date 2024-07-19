function homepageAmimation(){
gsap.set(".texts",{ scale:8})
var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".homepage",
        start:"top top",
        end:"bottom top",
        scrub:1
    }
})
tl
.to(".image",{
    '--clip':"0%",
    ease: Power2, 
}, 'a')
tl.to(".texts",{
    scale:1,
    ease:Power2,
}, 'a')
tl.to(".lftrow",{
    xPercent:-3,
    stagger:.03,
    ease:Power4
},'b')
tl.to(".rgtrow",{
    xPercent: 3,
    stagger:.03,
    ease:Power4
},'b')
}

function slides(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".real",
            start:"top top",
            end:"bottom bottom",
            scrub:0.1,
        },
        xPercent:-200,
        ease:Power4
    })
}

function teams(){
    document.querySelectorAll(".infoelem").forEach(function(elem){
        elem.addEventListener("mousemove", function(dets){
            gsap.to(this.querySelector(".picture"),{
                opacity:1,
                ease:Power4,
                x: gsap.utils.mapRange(0 , window.innerWidth,-200,200 , dets.clientX),
                duration:.1
            })
            gsap.to(this.querySelector(".bluelayer"),{
                opacity:1,
                ease:Power4,
                duration:.1
            })
        })
        elem.addEventListener("mouseleave", function(dets){
            gsap.to(this.querySelector(".picture"),{
                opacity:0,
                ease:Power4,
                duration:.1
            })
            gsap.to(this.querySelector(".bluelayer"),{
                opacity:0,
                ease:Power4,
                duration:.1
            })
        })
    })
}

function reviews(){
var cluter="";
document.querySelector(".comment")
.textContent.split("")
.forEach(function(ele){
    if(ele== " ") cluter+=`<span>&nbsp;</span>`
    cluter+=`<span>${ele}</span>`;
})
document.querySelector(".comment").innerHTML= cluter ;
gsap.set(".comment span",{opacity:0.2,})
gsap.to(".comment span",{
    scrollTrigger:{
        trigger:".review",
        start:"top 70%",
        end:"bottom 100%",
        scrub:0.1
    },
    opacity:1,
    stagger:.05,
    ease:Power4
})
}

function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsules(){
    gsap.to(".capsule",{
        scrollTrigger:{
            trigger:".capsule",
            start:"top 60%",
            end:"bottom bottom",
            scrub:1
        },
        y: 0,
        ease:Power4
    })
}

function colors(){
    document.querySelectorAll(".section")
.forEach(function(e){
    ScrollTrigger.create({
        trigger: e,
        start :"top 50%",
        end: "bottom 50%",
        onEnter:function(){
            document.body.setAttribute("theme",e.dataset.color )
        },
        onEnterBack:function(){
            document.body.setAttribute("theme",e.dataset.color )
        }
    })
})
}
function loader(){
    function loader(){
    if (!sessionStorage.getItem('loaded')) {
        const tll=gsap.timeline()
        tll.from(".loader h1",{
            opacity:0,
            x:20,
            stagger:0.2,
            duration:2,
        })
        tll.to(".loader h1",{
            opacity:0,
            x:-40,
            stagger:0.2,
            duration:1
        })
        tll.to(".loader",{
            opacity:0,
        })
        tll.to(".loader",{
            display:"none",
        })
        sessionStorage.setItem('loaded', true);
    } else {
        document.querySelector(".loader").style.display = "none";
    }
}
loader();
}

loader();
colors();
homepageAmimation();
slides();
capsules();
loco();
reviews();
teams();