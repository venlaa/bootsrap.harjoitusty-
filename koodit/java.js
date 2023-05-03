function addNote() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    var highlight = document.getElementById("highlight").checked;

    var date = new Date();
    var dateString = date.toLocaleString();

    var note = document.createElement("li");
    note.innerHTML = "<strong>" + name + "</strong> kirjoitti: " + message + " <span class='date'>" + dateString + "</span>";

    if (highlight) {
      note.style.outline = "2px solid grey";
    }

    document.getElementById("notes").appendChild(note);

    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
    document.getElementById("highlight").checked = false;
  }
  


  
  const crystals = ["Ametisti", "Ruusukvartsi", "Vuorikide", "Sitriini", "Jade", "Apatiitti", "Akvamariini", "Seleniitti"];
  function generateCrystal() {
    const randomIndex = Math.floor(Math.random() * crystals.length);
    document.getElementById("crystalReturn").innerHTML = crystals[randomIndex];
  }
  