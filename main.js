const form = document.getElementById('form-atividade');
const imgAprovado= '<img src="./images/aprovado.png" alt="emoji celebrando"/>';
const imgReprovado= '<img src="./images/reprovado.png" alt="emoji deceppcionado"/>';
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Qual é a nota mínima?:'));

const atividades = [];
const notas = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinha();
    atualizarTabela();
    atualizarMediaFinal();
});

function addLinha() {

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`Atividade ${inputNomeAtividade.value} já existe`);
    } else {
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));
    
    let linha = `<tr>`;
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value > notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`

    linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';

}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function calcularMediaFinal() { 
    let somaFinal = 0;
    for (let i = 0; i < notas.length; i++) {
        somaFinal += notas[i];
    }
    return somaFinal/notas.length;
}

function atualizarMediaFinal() {
    const mediaFinal = calcularMediaFinal();
    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal > notaMinima ? spanAprovado: spanReprovado;
}
