function addNote() {

    //Määritellään muuttujat
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    var highlight = document.getElementById("highlight").checked;

    var date = new Date();
    var dateString = date.toLocaleString();

    //Luodaan listaelementti ja viesti
    var note = document.createElement("li");
    note.innerHTML = "<strong>" + name + "</strong> kirjoitti: " + message + " <span class='date'>" + dateString + "</span>";

    //Jos checkbox on valittu, lisätään border
    if (highlight) {
      note.style.outline = "2px solid grey";
    }

    //Lisätään listaitemi oikeaan paikkaan
    document.getElementById("notes").appendChild(note);

    //Tyhjennetään elementit 
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
    document.getElementById("highlight").checked = false;
  }
  
    //Tehdään array ja arvotaan joku sattumanvaraisesti
    const crystals = ["Ametisti", "Ruusukvartsi", "Vuorikide", "Sitriini", "Jade", "Apatiitti", "Akvamariini", "Seleniitti"];
    function generateCrystal() {
    const randomIndex = Math.floor(Math.random() * crystals.length);
    document.getElementById("crystalReturn").innerHTML = crystals[randomIndex];
  }
  