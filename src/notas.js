

const alunos = [
    { nome: 'Aline', nota: 5 },
    { nome: 'Bruno', nota: 8 },
    { nome: 'Carlos', nota: 4 },
    { nome: 'Eliane', nota: 7 },
    { nome: 'Fabio', nota: 6 },
  ];
  
  const filtrarAlunosAprovados = (alunos) => {
    return alunos.filter((aluno) => aluno.nota >= 6);
  };
  
  const executar = () => {
    const alunosAprovados = filtrarAlunosAprovados(alunos);
    const alunosAprovadosString = alunosAprovados.map(aluno => `${aluno.nome} (${aluno.nota})`).join(', ');

    console.log(`Os alunos aprovados são: ${alunosAprovadosString}`);
  };
  
  executar();
  
  
