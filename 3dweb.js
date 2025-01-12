// Shery.imageEffect("element",configration)  ye hai shery ka js jiski maddat se hum srri animation kr rhe hai elemnt mai voh sab daalo jo thiumhe krna annimate or fir configration hai vohagge ayega

// iss mai style hai jo type of option ahi bht sarri animation krne ke liye 6 7 tak hai maybe 

// image effect ke baad pheli chezz voh likhna jise annimation krna mere case voh backpanle hai uske baad congigration mai agye ga sarra style 

Shery.imageEffect("#backpanel",{style:5,config:{"a":{"value":1.15,"range":[0,30]},"b":{"value":-0.91,"range":[-1,1]},"zindex":{"value":"-999699","range":[-9999999,9999999]},"aspect":{"value":2.117829457364341},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.39,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},gooey : true})






  
var elemno = document.querySelectorAll(".elem");

elemno.forEach(function(elem){
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animationo = false; 
    
    document.querySelector("#main").addEventListener("click",function(){
          if(!animationo){
            animationo = true;
            gsap.to(h1s[index],{
             top :"-=100%",
             ease: Expo.easeInOut,
             overwrite: "auto",
             duration : 1,
             onComplete: function(){
              gsap.set(this._targets[0],{ top : "100%"});
              animationo = false;
             }
            });
       
            if(index === h1s.length - 1){
               index = 0;
            }
            else{
               index ++;
            }
       
            gsap.to(h1s[index],{
               top :"-=100%",
               ease: Expo.easeInOut,
               duration : 1,
              },"-=0.9");
          }
        
      
    });
    
})




let animate = false;


document.querySelector("#main").addEventListener("click",function(){
  
   const allimage = document.querySelectorAll(".imgani img") // sarri imgaes select krli jo imagi ani ke andar this
   const parent = document.querySelector(".imgani") //  ye hai parent container 
   
   if(!animate){
      animate = true;
      gsap.to(allimage[0],{  // pheli image ko left bhej dege left side - mai 0 uski index va;ue hai
         left: "-100%",
         duration: 1,
         ease: Expo.easeInOut,
         overwrite: "auto",
         onComplete: function(){
            allimage[0].style.left= "100%";
            parent.appendChild(allimage[0]);  // ye chiiz ye kr rhi hai ki ye pheli image ko function khtm hone pr node list mai last chil ki trha last mai fak rhi hai isse ek loop system bnn rha hai
            animate=false;
         },
      });
   
    
      gsap.to(allimage[1],{  // second image ko first image ki jagha lekar aao
         left: "0%",
         ease: "power3out",
         duration: 1,
      },"-0.5");
   }

});
