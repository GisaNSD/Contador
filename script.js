alert("The Night Watch says= DON'T YOU DARE TO TOUCH THE BUTTON");


function countdown() {
    
    var backgroundColor = setInterval(setColor, 200);
    
    let secs= 10;
    
    var downloadTimer = setInterval( function() {
        secs--;
        document.getElementById("warning").textContent = secs;
        
        if(secs == 0){
            winterIsComing();
            document.getElementById('Nightking').style.display = 'block';
            document.getElementById('warning').style.display = 'none';
            clearInterval(backgroundColor);
            clearInterval(downloadTimer);
        }
        
        document.getElementById("warning").disabled = true;
    } ,1000);
    
}

function winterIsComing(){
   
    document.getElementById("title").innerHTML = "WINTER IS COMING";

};

function setColor() {
        let body = document.body;
        body.style.backgroundColor = body.style.backgroundColor == "black" ? "lightblue" : "black";
      }