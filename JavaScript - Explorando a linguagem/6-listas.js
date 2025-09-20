console.log(`Trabalhando com listas`);
//const salvador =`Salvador`;
//const salvador =`São Paulo`;
//const salvador =`Rio de Janeiro`;

const listaDeDestinos = new Array (
    `Salvador`,             // Índice 0
    `São Paulo`,            // Índice 1
    `Rio de Janeiro`,       // Índice 2

);

listaDeDestinos.push(`Curitiba`); // adicionando um item na lista
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1,); // removendo um item da lista
console.log(listaDeDestinos);
console.log(listaDeDestinos[1])