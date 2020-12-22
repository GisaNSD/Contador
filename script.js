alert('If you are epileptic, pay attention and DONT YOU DARE TO TOUCH THE BUTTON');
document.getElementById('Nightking').style.display = 'none';


function countdown() {
    
    var backgroundColor = setInterval(setColor, 300);
    
    let secs= 3;
    
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
    
        // const buttonToImg= document.querySelector("warning");
        // const newInput= document.createElement("img");
        // newInput.value= "https://i.pinimg.com/originals/28/9d/64/289d6444052720ffc35edd9f9006713f.gif";

    document.getElementById("title").innerHTML = "WINTER IS COMING";
    // buttonToImg.replaceWith('newInput'>);  
};

function setColor() {
        var x = document.body;
        x.style.backgroundColor = x.style.backgroundColor == "red" ? "black" : "red";
      }