// console.log("Hello Word");

// Nomes = ["Alice", "Miguel", "Sophia", "Arthur", "Helena", "Bernardo",
//     "Valentina", "Heitor", "Laura", "Davi", "Isabella", "Lorenzo",
//     "Manuela", "Théo", "Izadora"] // 01

// adicionar = Nomes.push("Nom1","Nom2","Nom3"); // 02

// console.log(Nomes.length);
// console.log(Nomes);

// adicionar = Nomes.splice(1, 0, "Andre") //03
// adicionar = Nomes.splice(6, 0, "RAFAEL") // 03
// adicionar = Nomes.splice(7, 0, "Ramon") // 03

// Nomes.sort().reverse() // 04

// Nomes.shift(); // Primeiro index 0 //06
// Nomes.pop(); // Ultimo index 18 //05

// index = Nomes.indexOf(5) //07
// Nomes.splice(index, 1); // 07

// Nomes.sort() // 08


// console.log(Nomes);

// numero = 0

// for (const nome of Nomes) {
//     console.log(numero++ + "-" + nome);
// }

// Nomes.forEach(element => {
//     for( i = 1; i < Nomes.length;i++){

//         console.log( [i] +" "+ element);
//     }

// });

nomes = ["Maria", "Mirian", "DAVID"]
Nota = ["9.5", "7.5", "6.6"]


for (i = 0; i <= nomes.length; i++) {
    console.log(nomes[i]+"-"+Nota[i]);
}

const alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 7.5 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Carlos', nota: 9 },
  ];
  
  alunos.forEach((aluno) => {
    if (aluno.nota > 7) {
      console.log(`${aluno.nome} - Aprovado`);
    } else {
      console.log(`${aluno.nome} - Reprovado`);
    }
  });
  