
for(var i=0;i<3;i++){
  var btn=document.querySelectorAll(".myBtn")[i].addEventListener("click",
  function(){
    var text=this.innerHTML;
    audioPlay(text);
playAnimation(text);


  })

}

function audioPlay(text){
    switch (text) {
        case "a":
            var song=new Audio("audio/1.mp3")
            song.play();
            break;
            case "b":
            var song=new Audio("audio/2.mp3")
            song.play();
            break;
            case "c":
                var song=new Audio("audio/3.mp3")
                song.play();
                break;

        default:
            break;
    }
}

function playAnimation(text){
 var sbutton= document.querySelector("."+text);
sbutton.classList.add("box-shadow");
setTimeout(()=>{
  sbutton.classList.remove("box-shadow");
},2000)
}
// slider start from here
var photos=["images/doctor.png",
"images/hotel.png",
"images/house.png","images/me.jpg",
"images/student.png"];


var count=0;
function next(){
  var imag=document.getElementsByTagName("img")[0];

  for(var i=0;i<=photos.length;i++){
   
    count++;
    if(count>=photos.length){
      count=0;
      imag.src=photos[count];
    }else{
      imag.src=photos[count];
    }
   
    
    }

}



function prev(){
  var imag=document.getElementsByTagName("img")[0];

  for(var i=0;i<=photos.length;i++){
   
    count--;
    if(count<0){
      count=4;
      imag.src=photos[count];
    }else{
      imag.src=photos[count];
    }
   
    
    }

}


document.addEventListener("keypress",(event)=>{
 var text= event.key;
 audioPlay(text);
 playAnimation(text);
})

  
        

    