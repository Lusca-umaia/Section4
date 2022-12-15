function paradas(array: Array<Array<number>>) {

    let calculo: number;
    let resultado: number = 0;
    for (let i: number = 0; i < array.length; i++) {
        calculo = array[i][0] - array[i][1]
        resultado += calculo
    }

    return console.log(resultado)
}

paradas([[10, 2], [3, 5], [5, 8]])