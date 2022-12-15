function bingo(array: Array<number>) {
    let b: boolean = array.some(x => x == 2)
    let i: boolean = array.some(x => x == 9)
    let n: boolean = array.some(x => x == 14)
    let g: boolean = array.some(x => x == 7)
    let o: boolean = array.some(x => x == 15)

    if (b == true && i == true && n == true && g == true && o == true) {
        return console.log("Ganhou")
    }

    else {
        console.log("Perdeu")
    }
}

bingo([2, 9, 14, 7]) 