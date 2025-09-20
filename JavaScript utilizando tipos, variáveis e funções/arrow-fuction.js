const estudanteReprovou = (notaFinal, faltas) => {
    if(notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

const exibeNome = (nome) => nome; 

console.log(exibeInfosEstudante('Caroline',10));
console.log(exibeInfosEstudante('Ana',7));
console.log(exibeNome('Caroline'));
