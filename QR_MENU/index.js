var text = document.getElementById('textColor');
window.onload = function() {
   setTimeout(function (){
      text.style.color = 'gold'; 

      text.innerHTML = 'Xoş İsdirahələr!'; 
   },2000)
   setTimeout(function (){
      text.style.color = 'black'; 

      text.innerHTML = 'La Casa Restuarant'; 
   },4000)
 };
   var urek = document.querySelector(".fa-regular");
   var toast = document.querySelector(".toast");
   var like = document.querySelector(".like");
   
   function likehearth(){
     if(urek.style.color=="black"){
        urek.style.color="red"
        toast.style.display='block'
        toast.style.color='#FF4500';
        like.style.justifyContent='space-between';
     }else{
        urek.style.color="black"
        like.style.justifyContent='end';
        toast.style.color='red';
        toast.style.display='none'
     }
     setTimeout(function(){
      if(toast.style.display=='block'){
         toast.style.display='none';
         like.style.justifyContent='end';
      }
     }, 3000)
   }

var circle=document.getElementById('circle');
var story=document.getElementById('story');

 circle=function(){
     if(story.style.display==='none'){
        story.style.display='block'
        text.innerHTML = '';
     }else{
        story.style.display='none'
    }
 }
 circle();
 
 var chancell=document.getElementById('chancell');
 chancell.onclick=function(){
    if(story.style.display==='block'){
       story.style.display='none'
       text.innerHTML = 'La Casa Restuarant';
    }else{
       story.style.display='block'
   }
}
chancell();
