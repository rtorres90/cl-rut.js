function cl_rut(strRut) {
    console.log(strRut);
    if(strRut.indexOf('-') < 0) return false;
    var intMultiple = 3;
    var intTotalSum = 0;
    var intMaxLength = strRut.length;
    if(intMaxLength < 10) strRut = "0" * (10 - intMaxLength) + strRut;
    for (var numero in strRut) {
        if (numero == '-') break;
        intTotalSum += intMultiple * numero;
        intMultiple--;
        if (intMultiple == 1) intMultiple = 7;
    }
    modulo = intTotalSum % 11;
    dv = 11 - modulo;
    dvrut = strRut[intMaxLength - 1];
    if ((dv == 10) && (dvrut.toUpperCase() != 'K')) {
        return false;
    } else if ((dv != 10) && !(dv == dvrut)) {
        return false;
    } else {
        return true;
    }  
}