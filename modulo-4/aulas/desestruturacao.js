let primos = [2, 3, 5, 7, 11, 13];  //array

let curso = { // objetos
        nome: "Bootcamp Front End",
        modulos: 4,
        presencial: false,
        turma: 1,

    };
    let [p1, p2, ...resto] = primos;

    let { nome: nomeCurso, turma, ...outrosCampos } = curso;

    function imprime({ nome }) {
        console.log(nome);
    }
