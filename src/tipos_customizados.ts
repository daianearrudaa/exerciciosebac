type aluno = {
    nome: string;
    curso:string[];
}


const alunos: aluno[]=[
    {
        nome: "daiane",
        curso: ["front end", "ux"]
    },
    {
        nome:"aline",
        curso:["front end","python"],
    }
]

alunos.push({
    nome:"julia",
    curso:["arquitetura"]
})

function exibeAluno(aluno:aluno){
    
}