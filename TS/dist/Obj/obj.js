"use strict";
class car {
}
let cars = [
    {
        marca: "Ford",
        modelo: "New",
        valor: 2100,
        cor: "vermelho",
        auto: true
    },
    {
        marca: "Ford",
        modelo: "New",
        valor: 4100,
        cor: "verde",
        auto: true
    },
    {
        marca: "Two",
        modelo: "NewD",
        valor: 5100,
        cor: "azul",
        auto: true
    }
];
function marcaCarro(marcaCarro) {
    console.log(cars.filter(x => x.marca == marcaCarro));
}
function Marcas(array) {
    let arrayMarca = array;
    let bruto = [];
    array.forEach(element => {
        bruto.push(element.marca);
    });
    let ValoresSemRepeticao = [...new Set(bruto)];
    console.log(ValoresSemRepeticao);
}
function BuscaObjetos(array, propriedades) {
    let ArrayFinal = [];
    array.forEach(element => {
        let obj = {};
        for (let c = 0; c < propriedades.length; c++) {
            obj[propriedades[c]] = element[propriedades[c]];
        }
        ArrayFinal.push(obj);
    });
    console.log(ArrayFinal);
}
//Função que procura Objetos a partir da marca do Carro
marcaCarro("Ford");
// -- 
//Função que retorna todos os valores presentes na propriedade "Marcas" - sem repetição
Marcas(cars);
// --
//Função que retorna objetos do array com apenas as propriedades escolhidas
BuscaObjetos(cars, ['modelo', 'marca', 'valor']);
// --
// -- 
//# sourceMappingURL=obj.js.map