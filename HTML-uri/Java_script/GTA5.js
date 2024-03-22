window.onload = miscare_poze
var poze = ["./Poze/Gta1.jpg","./Poze/Gta2.jpg","./Poze/Gta3.jpg"]
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
        localStorage.setItem("Adauga", "gta30");
    else
        if(z.search("gta30") == -1)
            localStorage.setItem("Adauga", z + "gta30");
    document.getElementById("div_button").innerHTML = "Ai adaugat in cos!";
})

var continut = document.getElementById("Continut")
continut.style.color = "blue";
continut.innerHTML = "Grand Theft Auto V (prescurtat GTA V sau GTA 5) este un joc video de acțiune-aventură de tipul open world dezvoltat de Rockstar North și publicat de Rockstar Games.<br>Este al cincilea titlu principal din seria Grand Theft Auto și al cincisprezecelea din serie per total, precum și al primul (și singurul) din era 5 a acesteia.<br>ocul a fost lansat pentru Xbox 360 și PlayStation 3 pe 17 septembrie 2013, iar mai târziu și pentru Xbox One și PlayStation 4 pe 18 noiembrie 2014, Microsoft Windows pe 14 aprilie 2015. În cele din urmă, a fost relansat pentru PlayStation 5 și Xbox Series X și Series S în data de 15 martie 2022.";
