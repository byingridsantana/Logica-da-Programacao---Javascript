const reciboString = 'nome-do-produto1/valor33.5=cupom5;nome-do-produto2/valor4.99=cupom0;nome-do-produto3/valor10=cupom0;';

const listaDaVenda = reciboString
  .split(';')
  .filter(Boolean) 
  .map((produto) => {
    const [, nome, valor, cupom] = produto.match(/([^\/]+)\/valor([\d.]+)=cupom(\d+)/);
    return { produto: nome, valor: Number(valor), cupom: Number(cupom), quantidade: Math.floor(Math.random() * 5) };
  });

console.log(listaDaVenda);
