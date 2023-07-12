const capturarD  = () => {
    let nombreEmpleado = document.getElementById('nombre_empleado').value;
    let cargoEmpleado = document.getElementById('cargo_empleado').value;
    let sueldoBase = document.getElementById('sueldo_base').value;
    let horasExtras = document.getElementById('horas_extras').value;
    
    const horasExt = parseInt(horasExtras);

    let sueldoRecibir=sueldoBase+(horasExt*10);

    let imprimirNE= document.getElementById('imprimir-nombre-empleado');
    let imprimirCE = document.getElementById('imprimir-cargo-empleado');
    let imprimirSR = document.getElementById('imprimir-sueldo-recibir');

    imprimirNE.innerText = `Nombre empleado: ${nombreEmpleado}`;
    imprimirCE.innerText = `Nombre empleado: ${cargoEmpleado}`;
    imprimirSR.innerText = `Nombre empleado: ${sueldoRecibir}`;
}