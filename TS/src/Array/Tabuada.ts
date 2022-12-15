function tabuada(num: number) {
    let array: Array<number> = []
    let arrayTwo: Array<number> = [];
    let i: number;

    for (i = 1; i < 11; i++) {
        let calculo: number = num * i
        array.push(calculo)
    }

    for (i = 1; i < 11; i++) {
        let calculoTwo: number = (num + 1) * i
        arrayTwo.push(calculoTwo)

        calculoTwo = (num + 2) * i
        arrayTwo.push(calculoTwo)
    }

    return console.log(array, arrayTwo)
}

tabuada(5)