module.exports.metodoLinear = (arrayX, arrayY) => {
    
    if (arrayX.length != arrayY.length) {
        throw new Error('Os valores de X e Y devem ter o mesmo tamanho!');
    }

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

module.exports.MMQ = (X,Y) => {
    let x_sum = 0;
    let y_sum = 0;
    let xy_sum = 0;
    let xx_sum = 0;
    let count = 0;
    let x = 0;
    let y = 0;
    let values_length = X.length;

    if (values_length != Y.length) {
        throw new Error('Os valores de X e Y devem ter o mesmo tamanho!');
    }
    if (values_length === 0) {
        return [ [], [] ];
    }
    for (let i = 0; i< values_length; i++) {
        x = X[i];
        y = Y[i];
        x_sum+= x;
        y_sum+= y;
        xx_sum += x*x;
        xy_sum += x*y;
        count++;
    }
    let m = (count*xy_sum - x_sum*y_sum) / (count*xx_sum - x_sum*x_sum);
    let b = (y_sum/count) - (m*x_sum)/count;
    let result_values_x = [];
    let result_values_y = [];
    
    for (let i = 0; i < values_length; i++) {
        x = X[i];
        y = x * m + b;
        result_values_x.push(x);
        result_values_y.push(y);
    }
    return [result_values_x, result_values_y];
}