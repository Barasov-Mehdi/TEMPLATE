var circle=document.getElementById('circle');
var story=document.getElementById('story');

 circle=function(){
     if(story.style.display==='none'){
        story.style.display='block'
     }else{
        story.style.display='none'
    }
 }
 circle();
 
 var chancell=document.getElementById('chancell');
 chancell.onclick=function(){
    if(story.style.display==='block'){
       story.style.display='none'
    }else{
       story.style.display='block'
   }
}
chancell();
 


