function traducir() {
    var fraseInput = document.getElementById("fraseInput").value;
    var palabras = fraseInput.split(" ");
    var resultado = [];
  
    for (var i = 0; i < palabras.length; i++) {
      resultado.push("g´" + palabras[i]);
    }
  
    var traduccion = resultado.join(" ");
    var resultadoTraduccion = document.getElementById("resultadoTraduccion");
  
    if (fraseInput !== "") {
      resultadoTraduccion.textContent = "  " + traduccion;
      document.getElementsByClassName("translation-container")[0].style.display = "block";
    } else {
      resultadoTraduccion.textContent = "";
      document.getElementsByClassName("translation-container")[0].style.display = "none";
    }
  }
  