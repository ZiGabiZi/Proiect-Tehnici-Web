window.onload = miscare_poze
    var poze = ["./Poze/Rl1.jpg","./Poze/Rl2.jpg","./Poze/Rl3.jpg"]
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
        localStorage.setItem("Adauga", "Rl20");
    else
        if(z.search("Rl20") == -1)
            localStorage.setItem("Adauga", z + "Rl20");
    document.getElementById("div_button").innerHTML = "Ai adaugat in cos!";
})

var aux = document.getElementsByClassName("ModJoc");
for(let i=0;i<aux.length;i++){
    var parag = document.createElement("p");
    var nume_clasa = aux[i].id;

    parag.textContent = "Mod joc " + (i+1) + ": " + nume_clasa;
    aux[i].appendChild(parag);
}
