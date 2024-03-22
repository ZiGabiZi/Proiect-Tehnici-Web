window.onload = miscare_poze
var poze = ["./Poze/cs1.jpg","./Poze/cs2.jpg","./Poze/cs3.jpg"]
function miscare_poze(){
document.getElementById("poza-schimbare").src
var i = 1
setInterval(function (){
    if( i == 3)
        i = 0;
    document.getElementById("poza-schimbare").src = poze[i];
    i++;
},5000)
}

miscare_poze();


document.getElementById("incos").addEventListener('click',function (){
    var z = localStorage.getItem("Adauga")
    if(z == null)
        localStorage.setItem("Adauga", "cs15");
    else
        if(z.search("cs15") == -1)
            localStorage.setItem("Adauga", z + "cs15");
    document.getElementById("div_button").innerHTML = "Ai adaugat in cos!";
})

var paragrafe = document.getElementsByTagName("p")
for(let i=0;i<paragrafe.length;i++){
    paragrafe[i].style.color = "green";
    paragrafe[i].style.fontStyle = "italic"
}

