

gsap.set("#lapi-code-screen", {autoAlpha:0,});

const tl = gsap.timeline();
  
  
tl.from("#coffee-square", {scale:0, transformOrigin:'center', autoAlpha:0, duration: 1});
tl.from("#coffee-shadow", {scale:0, transformOrigin:'center', duration: 1},  "-=.5");
tl.from("#cofee-glass", {y: -200, duration: 1, autoAlpha:0}, "-=.5");

tl.from("#lapi-square", {scale:0, transformOrigin:'center', duration: 1},"-=.5");
tl.from("#lapi-shadow", {scale:0, transformOrigin:'center', duration: 1},"-=.5");

tl.from("#lapi-group", {y: -200, duration: 1, autoAlpha:0}, "-=.3");
tl.from("#code-shadow", {autoAlpha:0, scale:0,duration: 1, transformOrigin:'center center'}, "-=.7");
tl.to("#lapi-code-screen", {x:-10, y:-10,z:-20,autoAlpha:1}, "-=.7");
tl.from("#squre-2, #squre-3, #squre-4, #Group_12351, #Group_12352, #Ellipse_202, #Ellipse_196-2, #Group_12353", {scale:0, transformOrigin:'center', duration: 1},  "-=1");
