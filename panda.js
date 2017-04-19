//GlobalVariables

let extincion = document.getElementById("extincion");
let extincionText = document.getElementById("extitext");
let origen = document.getElementById("origen");
let origenText = document.getElementById("origentex")

//Events

extincion.addEventListener("click", hideExtincion);
origen.addEventListener("click", hideOrigen);


//These functions allow hiding and appearing texts

function hideExtincion() {
    if (extincionText && extincionText.style.display == "none"){
        extincionText.style.display = "block";
    }
    else{
      extincionText.style.display = "none" ; 
    }
    }
function hideOrigen() {
    if (origenText && origenText.style.display == "none"){
        origenText.style.display = "block";
    }
    else{
      origenText.style.display = "none"; 
    }
    }