window.onload = Afisare()
    function Afisare(){
        console.log(1)
        var iteme = localStorage.getItem("Adauga")
        console.log(iteme)
        var elemente = ["cs15","gta30","Rl20"]
        for (i of elemente)
            if(iteme.search(i) != -1)
                {       
                    if(i == "cs15")
                            document.getElementById("text" ).innerHTML += '<br>'+ "CSGO cu pretul de 15E" 
                    else if(i == "gta30")
                            document.getElementById("text" ).innerHTML += '<br>'+ "Gta 5 cu pretul de 30E"
                    else if(i == "Rl20")
                            document.getElementById("text" ).innerHTML += '<br>'+ "Rocket League cu pretul de 20E"

                }

                document.addEventListener("keydown", function (event) {
                    const button = document.getElementById("feedbackButton");
                    const balanta = document.getElementById("nr-balanta");
                
                    if (event.key === "1") {
                      button.style.backgroundColor = "green";
                      balanta.textContent = "Ne bucurăm că ești mulțumit!";
                
                      // Aplicați fade-in treptat pe fața zâmbitoare după 10 secunde
                      setTimeout(function () {
                        const smileyFace = document.createElement("img");
                        smileyFace.src = "./Poze/Smiley.jpg";
                        smileyFace.alt = "Smiley face";
                        smileyFace.classList.add("smiley");
                
                        button.appendChild(smileyFace);
                
                        // Ascunde imaginea după 5 secunde de la apariție
                        setTimeout(function () {
                          smileyFace.style.display = "none";
                
                          // Afișează din nou imaginea peste 10 secunde de la dispariție
                          setTimeout(function () {
                            smileyFace.style.display = "block";
                          }, 10000);
                        }, 5000);
                      }, 10000);
                    } else if (event.key === "0") {
                      button.style.backgroundColor = "red";
                      balanta.textContent = "Ne pare rău :(";
                
                      // Aplicați fade-in treptat pe fața tristă după 10 secunde
                      setTimeout(function () {
                        const sadFace = document.createElement("img");
                        sadFace.src = "./Poze/Sad-Face-Emoji.jpg";
                        sadFace.alt = "Sad face";
                        sadFace.classList.add("sad");
                
                        button.appendChild(sadFace);
                
                        // Ascunde imaginea după 5 secunde de la apariție
                        setTimeout(function () {
                          sadFace.style.display = "none";
                
                          // Afișează din nou imaginea peste 10 secunde de la dispariție
                          setTimeout(function () {
                            sadFace.style.display = "block";
                          }, 10000);
                        }, 5000);
                      }, 10000);
                    }
                  });
                }