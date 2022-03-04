function guardar() {

    var _nom = document.getElementById("Nombre").value;
    var _tel = document.getElementById("Telefono").value;
    var _emai = document.getElementById("Email").value;
    var _pastel = document.getElementById("pastel").value;
    var checks = document.querySelectorAll(".valores");
    var boton = document.getElementById("btn_guardar");
    var superHeroe = document.getElementById('superherofav').value;
    var mensajeCumple = document.getElementById('mensajeCumple').value;

    ///todos = new Array()
    var todo = []
    var estado = false
    boton.addEventListener('click', function () {
        checks.forEach((e) => {
            console.log(e.checked);
            if (e.checked === true) {
                //console.log(e.value);
                //todo.push(e.value)
                if (e.value === 'SuperHeroe Favorito'){
                    estado = true
                    todo.push(e.value)
                }else{
                    todo.push(e.value)
                }
                
            }
        });
       // console.log(todo.length);
        superHeroe ? todo.push(superHeroe) : console.log("Nada")
        mensajeCumple ? todo.push(" Mensaje de cumpleaños "+ mensajeCumple): console.log("naa")
       
        var fila = "<tr><td>" + _nom + "</td><td>" + _tel + "</td><td>" + _emai + "</td><td>" + _pastel + "</td><td>" +todo.join(', ')  + "</td></tr>";

        var btn = document.createElement("TR");
        btn.innerHTML = fila;
        document.getElementById("tablita").appendChild(btn);
        todo=[]
    })
}

function enviar(){
    var _nomb = document.getElementById("Nombre").value;
    var boton = document.getElementById("btn_guardar");
    boton.addEventListener('click', function(){
        alert(`${_nomb} Ha sido enviada su queja, gracias por contactarnos ...`)
    })
}