alert('If you are epileptic, pay attention and DONT YOU DARE TO TOUCH THE BUTTON');

function countdown() {
   
    var backgroundColor = setInterval(setColor, 300);
   
    document.getElementById("warning").disabled = true;
    
    let secs= 10;
   
    var downloadTimer = setInterval( function() {
    
        secs--;
        document.getElementById("warning").textContent = secs;
            
        if(secs <= 0){
            clearInterval(backgroundColor);
            clearInterval(downloadTimer);}
        } ,1000); }



function setColor() {
        var x = document.body;
        x.style.backgroundColor = x.style.backgroundColor == "black" ? "red" : "black";
      }