let tarefas = [];

function criarTarefa(id, titulo, descricao) {
  return { id, titulo, descricao };
}

function adicionarTarefa(titulo, descricao) {
  const id = tarefas.length + 1;

  if (titulo.trim() === '' || descricao.trim() === '') {
    console.log('O título e a descrição não podem estar vazios.');
    return;
  }

  if (titulo.length < 4) {
    console.log('O título deve ter no mínimo 4 caracteres.');
    return;
  }

  if (descricao.length < 20) {
    console.log('A descrição deve ter no mínimo 20 caracteres.');
    return;
  }

  const tarefaExistente = tarefas.find(tarefa => tarefa.titulo === titulo);
  if (tarefaExistente) {
    console.log('Já existe uma tarefa com este título.');
    return;
  }

  const novaTarefa = criarTarefa(id, titulo, descricao);
  tarefas.push(novaTarefa);
  console.log('Tarefa adicionada com sucesso!');
}

function editarTarefa(id, novoTitulo, novaDescricao) {
  const indiceTarefa = tarefas.findIndex(tarefa => tarefa.id === id);

  if (indiceTarefa === -1) {
    console.log('Tarefa não encontrada.');
    return;
  }

  if (novoTitulo.trim() === '' || novaDescricao.trim() === '') {
    console.log('O título e a descrição não podem estar vazios.');
    return;
  }

  if (novoTitulo.length < 4) {
    console.log('O título deve ter no mínimo 4 caracteres.');
    return;
  }

  if (novaDescricao.length < 20) {
    console.log('A descrição deve ter no mínimo 20 caracteres.');
    return;
  }

  const tarefaExistente = tarefas.find(tarefa => tarefa.titulo === novoTitulo && tarefa.id !== id);
  if (tarefaExistente) {
    console.log('Já existe uma tarefa com este título.');
    return;
  }

  tarefas[indiceTarefa].titulo = novoTitulo;
  tarefas[indiceTarefa].descricao = novaDescricao;
  console.log('Tarefa editada com sucesso!');
}

function excluirTarefa(id) {
  const indiceTarefa = tarefas.findIndex(tarefa => tarefa.id === id);

  if (indiceTarefa === -1) {
    console.log('Tarefa não encontrada.');
    return;
  }

  tarefas.splice(indiceTarefa, 1);
  console.log('Tarefa removida com sucesso!');
}

function listarTarefas() {
  if (tarefas.length === 0) {
    console.log('Não há tarefas cadastradas.');
  } else {
    console.log('Lista de tarefas:');
    tarefas.forEach(tarefa => {
      console.log(`ID: ${tarefa.id} - Título: ${tarefa.titulo} - Descrição: ${tarefa.descricao}`);
    });
  }
}

// Adicionando tarefas
adicionarTarefa('Limpar casa', 'Limpar todos os cômodos da casa.');
adicionarTarefa('Estudar', 'Estudar programação por uma hora.');
adicionarTarefa('Ir ao cinema', 'Assistir ao novo filme no cinema.');

// Listando tarefas
listarTarefas();

// Editando uma tarefa
editarTarefa(2, 'Estudar JavaScript', 'Estudar JavaScript por duas horas.');

// Listando tarefas novamente após a edição
listarTarefas();

// Removendo uma tarefa
excluirTarefa(3);

// Listando tarefas após a remoção
listarTarefas();
