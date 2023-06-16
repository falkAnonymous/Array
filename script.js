// console.log("Hello Word");

Nomes = ["Alice", "Miguel", "Sophia", "Arthur", "Helena", "Bernardo",
"Valentina", "Heitor", "Laura", "Davi", "Isabella", "Lorenzo",
"Manuela", "Théo", "Izadora"] // 01

// adicionar = Nomes.push("Nom1","Nom2","Nom3"); // 02

// console.log(Nomes.length);
// console.log(Nomes);

 adicionar = Nomes.splice(1,0,"Andre") //03
 adicionar = Nomes.splice(6,0,"RAFAEL") // 03
 adicionar = Nomes.splice(7,0,"Ramon") // 03

Nomes.sort().reverse() // 04

Nomes.shift(); // Primeiro index 0 //06
Nomes.pop(); // Ultimo index 18 //05

index = Nomes.indexOf(5) //07
Nomes.splice(index,1); // 07

Nomes.sort() // 08


// console.log(Nomes);

numero = 0

for (const nome of Nomes) {
    console.log(numero++ +"-"+ nome);
}

// Nomes.forEach(element => {
//     for( i = 1; i < Nomes.length;i++){
        
//         console.log( [i] +" "+ element);
//     }
    
// });


