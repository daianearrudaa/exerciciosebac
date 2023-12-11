"use strict";

var alunos = [{
  nome: 'Aline',
  nota: 5
}, {
  nome: 'Bruno',
  nota: 8
}, {
  nome: 'Carlos',
  nota: 4
}, {
  nome: 'Eliane',
  nota: 7
}, {
  nome: 'Fabio',
  nota: 6
}];
var filtrarAlunosAprovados = function filtrarAlunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};
var executar = function executar() {
  var alunosAprovados = filtrarAlunosAprovados(alunos);
  var alunosAprovadosString = alunosAprovados.map(function (aluno) {
    return "".concat(aluno.nome, " (").concat(aluno.nota, ")");
  }).join(', ');
  console.log("Os alunos aprovados s\xE3o: ".concat(alunosAprovadosString));
};
executar();