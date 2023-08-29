var tl=gsap.timeline()

tl.from("#nav",{
    opacity:0,
    delay:0.3
})

tl.from("#nav h4",{
     y:-80,
     opacity:0,
     duration:0.8,
     delay:0.5,
     stagger:0.3
})

tl.from("#nav-part2 ",{
    y:-80,
    duration:1,
    delay:0.7,
    stagger:1,
    opacity:0.7
})

tl.from("#left h5",{
    x:-80,
    duration:1,
    delay:0.5,
    stagger:0.3,
    opacity:0,
    
})

tl.from("h1",{
    x:-80,
    duration:1,
    delay:0.5,
    stagger:0.3,
    opacity:0
})

tl.from("#left p",{
    opacity:0,
    x:-80,
    duration:1
})

tl.from("#left button",{
    opacity:0,
    rotate:360
})

tl.from("#right .elem",{
    y:-80,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.3
})
