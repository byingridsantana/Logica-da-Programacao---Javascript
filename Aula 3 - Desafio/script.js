const parceiros = [
  { parceirosId: 19660156627897, nome: 'Fernanda Santos' },
  { parceirosId: 23998058019370, nome: 'Rafael Souza' },
  { parceirosId: 92291338611, nome: 'Maria Silva' },
  { parceirosId: 55443795656, nome: 'Maria Souza' },
  { parceirosId: 77743761456, nome: 'Ana Costa' },
  { parceirosId: 47202302326, nome: 'Maria Ferreira' },
  { parceirosId: 58017232567, nome: 'Sofia Costa' },
  { parceirosId: 16733009491247, nome: 'Lucas Silva' },
  { parceirosId: 63351859919, nome: 'Rafael Souza' },
  { parceirosId: 84297701780, nome: 'Carlos Oliveira' },
];

const parceirosPF = parceiros.filter((parceiro) => parceiro.parceirosId.toString().length === 11);
const parceirosPJ = parceiros.filter((parceiro) => parceiro.parceirosId.toString().length === 14);

const parceirosAgrupados = {
  PF: parceirosPF,
  PJ: parceirosPJ,
};

console.log(parceirosAgrupados);