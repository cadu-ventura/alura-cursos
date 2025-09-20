const estudante = {
    nome: 'Carlos Eduardo',
    idade: 26,
    cpf:'90711947287',
    turma: 'JavaScript'
}


estudante.nome

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(estudante.pet);
console.log(estudante['pet']);



console.log(estudante['nome']);
console.log(estudante['cpf']);


console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));