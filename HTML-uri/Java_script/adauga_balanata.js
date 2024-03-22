window.onload = corectareB

function Baga(){
    if(localStorage.getItem("balantaB") == null){
        var x =parseFloat(window.prompt("Cat vrei sa adaugi?"))
        console.log(x)
        
        localStorage.setItem("balantaB", x)
    }
    else{
        var x =parseFloat(window.prompt("Cat vrei sa adaugi?"))
        var y = parseFloat(localStorage.getItem("balantaB"))
        x+=y;
        localStorage.setItem("balantaB", x)

    }

    corectareB()

 
     

}

function corectareB(){
    document.getElementById("nr-balanta").innerHTML = localStorage.getItem("balantaB") + "€"
  
}