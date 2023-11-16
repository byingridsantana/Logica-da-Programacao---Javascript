const reciboDeVenda = "régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;";

const reciboCorrigido = reciboDeVenda.replaceAll('/', ';').replaceAll('valor', '').replaceAll('=cupom',';')

const venda = reciboCorrigido.split(';');
venda.pop();


const reciboVenda = {}
let j = 0

for (let i = 0; (i < venda.length); i += 3) {
    const chave1 = `produto${j}`;
    const chave2 = "produto";
    const chave3 = "valor";
    const chave4 = "desconto";
    const valor2 = venda[i];
    const valor3 = venda[i + 1];
    const valor4 = venda[i + 2];
    reciboVenda[chave1] = {};
    reciboVenda[chave1][chave2] = valor2;
    reciboVenda[chave1][chave3] = valor3;
    reciboVenda[chave1][chave4] = valor4;
    j += 1;
}

let totalDaCompra = 0;

for (let i = 2; (i < venda.length); i += 3) {
    totalDaCompra += Number(venda[i]);
}

const valorFinal  = `O total da compra foi de ${totalDaCompra} reais.`

console.log(reciboVenda);
console.log(valorFinal);