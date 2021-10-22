module.exports.metodoLinear = (arrayX, arrayY) => {
    
    const reducer = (previousValue, currentValue) => previousValue + currentValue;

    let somaX = arrayX.reduce(reducer)
    let somaY = arrayY.reduce(reducer)

    let somaXY = 0
    let somaX2 = 0
    let somaY2 = 0

    let X = 0
    let Y = 0
    let SSxx = 0
    let SSyy = 0
    let SSxy = 0

    let m = 0
    let n = 0
    for (let index = 0; index < arrayX.length; index++) {
        somaXY = somaXY + arrayX[index] * arrayY[index]
    }

    for (let index = 0; index < arrayX.length; index++) {
        somaX2 = somaX2 + arrayX[index] * arrayX[index]
    }

    for (let index = 0; index < arrayY.length; index++) {
        somaY2 = somaY2 + arrayY[index] * arrayY[index]
    }

    X = somaX/arrayX.length
    Y = somaY/arrayY.length
    SSxx = (somaX2 - ((somaX * somaX)/arrayX.length))
    SSyy = (somaY2 - ((somaY * somaY)/arrayX.length))
    SSxy = (somaXY - ((somaX * somaY)/arrayX.length))

    m = SSxy/SSxx
    n = Y - (X * m)
    return {
        n: n,
        m: m
    }
}