function guardar(){
   
    var _nom = document.getElementById("Nombre").value;
    var _tel = document.getElementById("Telefono").value;
    var _emai = document.getElementById("Email").value;

    var fila="<tr><td>"+_nom+"</td><td>"+_tel +"</td><td>"+_emai +"</td></tr>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);
}