function mod11(strIdTag) {
    var objTag = document.getElementById(strIdTag);
    var rut = "";
    if(objTag.length){
        rut = objTag.value; 
    }
    var numero;
    var multiplo = 3;
    var sumaTotal = 0;
    var modulo;
    var dv;
    var cadenaCompleta;
    if (rut != "" && rut != "--") {
        if (rut.length != 9 && rut.length != 10 && rut.length != 0) {
            evento.preventDefault();
            alert("Has Ingresado un RUT inválido\nPor favor Verifique lo ingresado");
            return 0;
        } else {
            if (rut.length == 9) {
                rut = "0" + rut;
            }
            for (actual = 0; actual < (rut.length - 2); actual++) {
                numero = rut[actual];
                sumaTotal += multiplo * numero;
                multiplo--;
                if (multiplo == 1) {
                    multiplo = 7;
                }
            }
            modulo = sumaTotal % 11;
            dv = 11 - modulo;
            if ((dv == 10) && (rut[rut.length - 1] != 'k' && rut[rut.length - 1] != 'K')) {
                evento.preventDefault();
                alert("Has Ingresado un RUT inválido\nPor favor Verifique lo ingresado");
                return 0;
            } else if ((dv != 10) && (dv != rut[rut.length - 1])) {
                evento.preventDefault();
                alert("Has Ingresado un RUT inválido\nPor favor Verifique lo ingresado");
                return 0;
            }
        }
    } else {
        evento.preventDefault();
        alert("Has Ingresado un RUT inválido\nPor favor Verifique lo ingresado");
        return 0;
    }
}