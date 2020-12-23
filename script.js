alert("The Night Watch says= DON'T YOU DARE TO TOUCH THE BUTTON");


let warningId= document.getElementById("warning");
let audioEtiqueta = document.querySelector("audio")


warningId.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "got.mp3")
    audioEtiqueta.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  })    


function countdown() {
    
    var backgroundColor = setInterval(setColor, 200);
 
    let secs= 2;
    
    var downloadTimer = setInterval( function() {
        secs--;
        warningId.textContent = secs;
        warningId.disabled = true;
        
        if(secs == 0){
            changeTitle();
            displayChanges();
            clearInterval(backgroundColor);
            clearInterval(downloadTimer);
        }
        
    } ,1000);
    
}

function changeTitle(){
   
    document.getElementById("title").innerHTML = "WINTER IS COMING";

};

function displayChanges(){

    document.getElementById('Nightking').style.display = 'flex';
    warningId.style.display = 'none';

}

function setColor() {
        let body = document.body;
        body.style.backgroundColor = body.style.backgroundColor == "black" ? "lightblue" : "black";
      }