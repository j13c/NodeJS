function add(x1,x2){
    const option = "SUMAR";
    const sign = signOperation("add");
    const res = x1 + x2
    ;
    const text = `Operacion: ${option} \n ${x1} ${sign} ${x2} = ${res}`;
    return text;
}

function subtraction(x1,x2){
    const option = "RESTAR";
    const sign = signOperation("sub");
    const res = x1 - x2;
    const text = `Operacion: ${option} \n ${x1} ${sign} ${x2} = ${res}`;
    return text;
}

function multiplication(x1,x2){
    const option = "MULTIPLICAR";
    const sign = signOperation("mul");
    const res = x1 * x2;
    const text = `Operacion: ${option} \n ${x1} ${sign} ${x2} = ${res}`;
    return text;
}

function division(x1,x2){
    if(x2 === 0){
        return "ERROR: No se puede dividir entre 0";
    }
    const option = "DIVIDIR";
    const sign = signOperation("div");
    const res = x1 / x2;
    const text = `Operacion: ${option} \n ${x1} ${sign} ${x2} = ${res}`;
    return text;
}

function signOperation(option){
    let sign = "";
    switch (option) {
        case "add":
            sign = "+";
        break;
        case "sub":
            sign = "-";
        break;
        case "mul":
            sign = "*";
        break;
        case "div":
            sign = "/";
        break;                            
        default:
            //TODO: Lanzar exception!!
            sign = "+";
            break;
    }
    return sign;
}

const Math = {};
Math.add = add;
Math.subtraction = subtraction;
Math.multiplication = multiplication;
Math.division = division;
/*
exports.add = add;
exports.subtraction = subtraction;
exports.multiplication = multiplication;
exports.division = division;
*/
module.exports = Math;