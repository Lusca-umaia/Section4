class car { marca!: string; modelo!: string; valor!: number; cor!: string; auto!: boolean;[key: string]: any }
let cars: car[] = [
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


function marcaCarro(marcaCarro: string) {
    console.log(cars.filter(x => x.marca == marcaCarro))
}

function Marcas(array: car[]) {
    let arrayMarca = array
    let bruto: string[] = []
    array.forEach(element => {
        bruto.push(element.marca)
    });

    let ValoresSemRepeticao = [...new Set(bruto)];

    console.log(ValoresSemRepeticao)
}

function BuscaObjetos(array: car[], propriedades: string[]) {
    let ArrayFinal: {}[] = []

    array.forEach(element => {
        let obj: { [key: string]: any } = {}

        for (let c: number = 0; c < propriedades.length; c++) {
            obj[propriedades[c]] = element[propriedades[c]];
        }

        ArrayFinal.push(obj)

    });

    console.log(ArrayFinal)

}

//Função que procura Objetos a partir da marca do Carro

marcaCarro("Ford")

// -- 

//Função que retorna todos os valores presentes na propriedade "Marcas" - sem repetição

Marcas(cars)

// --

//Função que retorna objetos do array com apenas as propriedades escolhidas

BuscaObjetos(cars, ['modelo', 'marca', 'valor'])

    // --


 // -- 