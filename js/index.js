//Función para capturar datos del formulario de cotización
function captura() {
    var precioFinal;
    let ciCliente = document.getElementById("ci_cliente").value;
    let nombresCliente = document.getElementById("nombres_cliente").value;
    let apellidosCliente = document.getElementById("apellidos_cliente").value;
    let direccionCliente = document.getElementById("direccion_cliente").value;
    let seleccionCarro = document.getElementById("eleccion").value;
    let precioCarro = document.getElementById("price").value;

    if (ciCliente == "") {
        alert("El número de ci/ruc es obligatorio");
        document.getElementById("ci_cliente").focus();
    } else {
        if (nombresCliente == "") {
            alert("El nombre es obligatorio");
            document.getElementById("nombres_cliente").focus();
        } else {
            if (apellidosCliente == "") {
                alert("El apellido es obligatorio");
                document.getElementById("apellidos_cliente").focus();
            } else {
                if (direccionCliente == "") {
                    alert("La dirección es obligatoria");
                    document.getElementById("direccion_cliente").focus();
                } else {
                    const precioSub = parseFloat(precioCarro);

                    if (seleccionCarro == "Ford Fiesta") {
                        precioFinal = precioSub - (precioSub * 0.05);
                    } else {
                        precioFinal = precioSub - (precioSub * 0.10);
                    }
                }
            }
        }
    }

    
    let imprimirCi = document.getElementById('imprimir-ci-ruc');
    let imprimirNombre = document.getElementById('imprimir-nombre');
    let imprimirApellido = document.getElementById('imprimir-apellido');
    let imprimirDireccion = document.getElementById('imprimir-direccion');
    let imprimirVehiculo = document.getElementById('imprimir-vehiculo');
    let imprimirPrecio = document.getElementById('imprimir-valor-final');

    imprimirCi.innerText = `CI/RUC: ${ciCliente}`;
    imprimirNombre.innerText = `Nombre: ${nombresCliente}`;
    imprimirApellido.innerText = `Apellido: ${apellidosCliente}`;
    imprimirDireccion.innerText = `Dirección: ${direccionCliente}`;
    imprimirVehiculo.innerText = `Carro seleccionado: ${seleccionCarro}`;
    imprimirPrecio.innerText = `Precio: ${precioFinal}`;
    alert(precioFinal);
}

const botonRegistro = document.getElementById('btn-registrar');
botonRegistro.addEventListener('click', () => {
    captura();
})
