const reciboString = 'nome-do-produto1/valor33.5=cupom5;nome-do-produto2/valor4.99=cupom0;nome-do-produto3/valor10=cupom0;';

const listaDaVenda = reciboString.split(';')
  .map((produto) => {
    const [, produtoNome, produtoValor, produtoCupom] = produto.match(/([^\/]+)\/valor([\d.]+)=cupom(\d+)/) || [];
    return {
      produto: produtoNome,
      valor: Number(produtoValor),
      cupom: Number(produtoCupom),
      quantidade: Math.floor(Math.random() * 5)
    };
  })
  .filter(produto => produto.produto);

console.log(listaDaVenda);
