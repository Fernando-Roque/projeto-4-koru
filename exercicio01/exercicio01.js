function addIsAdult(person) {
  return {
    ...person,
    isAdult: person.age >= 18
  };
}

// Exemplo de uso:
const pessoa = { name: "Ana", age: 22 };
const novaPessoa = addIsAdult(pessoa);
console.log(novaPessoa);
// Saída: { name: "Ana", age: 22, isAdult: true }



 B:

function combineArrays(...arrays) {
return [].concat(...arrays);
}

// Exemplo de uso:
const frutas1 = ["maçã", "banana"];
const frutas2 = ["laranja", "kiwi"];
const frutas3 = ["uva"];

const todasFrutas = combineArrays(frutas1, frutas2, frutas3);
console.log(todasFrutas);
// Saída: [ "maçã", "banana", "laranja", "kiwi", "uva" ]

function combineArrays(...arrays) {
  return arrays.reduce((acc, curr) => [...acc, ...curr], []);
}
