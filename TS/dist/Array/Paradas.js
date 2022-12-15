"use strict";
function paradas(array) {
    let calculo;
    let resultado = 0;
    for (let i = 0; i < array.length; i++) {
        calculo = array[i][0] - array[i][1];
        resultado += calculo;
    }
    return console.log(resultado);
}
paradas([[10, 2], [3, 5], [5, 8]]);
//# sourceMappingURL=Paradas.js.map