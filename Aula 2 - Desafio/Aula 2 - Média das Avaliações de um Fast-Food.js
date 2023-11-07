const avaliacoes = {
    '1 estrela': 2,
    '2 estrelas': 15,
    '3 estrelas': 18,
    '4 estrelas': 25,
    '5 estrelas': 40,
  };
  
const Clientes = 100;
  
  let notaMedia = 0;
  for (const nota in avaliacoes) {
    notaMedia += parseInt(nota) * (avaliacoes[nota] / Clientes);
  }
  
 console.log('Média das Avaliações dos Clientes: ' + notaMedia.toFixed(2));