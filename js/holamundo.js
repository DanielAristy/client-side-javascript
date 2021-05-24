var personas = ["Jose", "Pedro", "Jose", "Luis"];
const LLENAR_DATOS = "Debes llenar el formulario completo"
for (const iterator of personas) {
    console.log(iterator)
}

function enviarDatos(){
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    validateData(name,lastname);
    limpiarDatos()
}

function validateData(name,lastname){
    if(name == ""){
        mostrarAlerta()
        document.getElementById("name").focus()
        
    }else if (lastname == ""){
        mostrarAlerta()
        document.getElementById("lastname").focus()
        
    }else {
        alert(`Hola ${name} ${lastname}, como estas?`)
    }
}
function mostrarAlerta(){
    alert(LLENAR_DATOS)
}

function limpiarDatos(){
  document.getElementById("name").value = "";
  document.getElementById("lastname").value = "";
}