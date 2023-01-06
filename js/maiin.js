const form =document.getElementById('form-cadastro');

const nomefuncionario =[];
const generoDoFuncionario =[];
const cpfDoFuncionario =[];
const RgDoFuncionario =[];
const EstadoCivil =[];
const conjugeDoFuncionario =[];
const cpfDoConjuge =[];
const telefone2 =[];
const instrucaoDoFuncionario =[];
const formacaoDoFuncionario =[];
const PaiDoFuncionario =[];
const MaeDoFuncionario =[];
const Telefone =[];
const celular1 =[];
const celular2 =[];
const endereco =[];
const cidade =[];
const EstadoD =[];
const cepDoFuncionario =[];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarlinha();
    atualizatabela();
});

function adicionarlinha() {
    const inputnome = document.getElementById('nome');
    const inputgenero = document.getElementById('genero');
    const inputcpf = document.getElementById('cpf');
    const inputrg = document.getElementById('rg');
    const inputestado_civil = document.getElementById('ec');
    const inputconjuge = document.getElementById('conjuge');
    const inputcpf_do_conjuge = document.getElementById('cpf2');
    const inputtel_do_conjuge = document.getElementById('tel-conjuge');
    const inputgrau_de_instrucao = document.getElementById('instrucao');
    const inputformacao = document.getElementById('formacao');
    const inputnome_do_pai = document.getElementById('nome-pai');
    const inputnome_da_mae = document.getElementById('nome-mae');
    const inputtelefone = document.getElementById('tel');
    const inputcelular_1 = document.getElementById('cel1');
    const inputcelular_2 = document.getElementById('cel2');
    const inputendereco = document.getElementById('address');
    const inputmunicipio = document.getElementById('municipio');
    const inputestado = document.getElementById('estado');
    const inputcep = document.getElementById('cep');

    if (nomefuncionario.includes(inputnome.value)){
        alert (`Esta Pessoa: ${inputnome.value} ja foi Inserido`);
    }else{
    nomefuncionario.push(inputnome.value);
    generoDoFuncionario.push(inputgenero.value);
    cpfDoFuncionario.push(inputcpf.value);
    RgDoFuncionario.push(inputrg.value);
    EstadoCivil.push(inputestado_civil.value);
    conjugeDoFuncionario.push(inputconjuge.value);
    cpfDoConjuge.push(inputcpf_do_conjuge.value);
    telefone2.push(inputtel_do_conjuge.value);
    instrucaoDoFuncionario.push(inputgrau_de_instrucao.value);
    formacaoDoFuncionario.push(inputformacao.value);
    PaiDoFuncionario.push(inputnome_do_pai.value);
    MaeDoFuncionario.push(inputnome_da_mae.value);
    Telefone.push(inputtelefone.value);
    celular1.push(inputcelular_1.value);
    celular2.push(inputcelular_2.value);
    endereco.push(inputendereco.value);
    cidade.push(inputmunicipio.value);
    EstadoD.push(inputestado.value);
    cepDoFuncionario.push(inputcep.value);

    let linha = '<tr>';
    linha += `<td>${inputnome.value}</td>`
    linha += `<td>${inputgenero.value}</td>`
    linha += `<td>${inputcpf.value}</td>`
    linha += `<td>${inputrg.value}</td>`
    linha += `<td>${inputestado_civil.value}</td>`
    linha += `<td>${inputconjuge.value}</td>`
    linha += `<td>${inputcpf_do_conjuge.value}</td>`
    linha += `<td>${inputtel_do_conjuge.value}</td>`
    linha += `<td>${inputgrau_de_instrucao.value}</td>`
    linha += `<td>${inputformacao.value}</td>`
    linha += `<td>${inputnome_do_pai.value}</td>`
    linha += `<td>${inputnome_da_mae.value}</td>`
    linha += `<td>${inputtelefone.value}</td>`
    linha += `<td>${inputcelular_1.value}</td>`
    linha += `<td>${inputcelular_2.value}</td>`
    linha += `<td>${inputendereco.value}</td>`
    linha += `<td>${inputmunicipio.value}</td>`
    linha += `<td>${inputestado.value}</td>`
    linha += `<td>${inputcep.value}</td>`
    linha += '</tr>';

    linhas += linha;
}
    inputnome.value = '';
    inputgenero.value = '';
    inputcpf.value = '';
    inputestado_civil.value = '';
    inputconjuge.value = '';
    inputcpf_do_conjuge.value = '';
    inputtel_do_conjuge.value = '';
    inputgrau_de_instrucao.value = '';
    inputformacao.value = '';
    inputnome_do_pai.value = '';
    inputnome_da_mae.value = '';
    inputtelefone.value = '';
    inputcelular_1.value = '';
    inputcelular_2.value = '';
    inputendereco.value = '';
    inputmunicipio.value = '';
    inputestado.value = '';
    inputcep.value = '';
}

function atualizatabela() {
    const corpotabela = document.querySelector('.cadastro tbody');
    corpotabela.innerHTML = linhas;
}

function removerElemento(elementoClicado,removerItem) {
    elementoClicado.closest("tr").remove();
    removerItem();
}

function removerItem(){
    var index = NOME.indexOf(inputnome.value);
    NOME.splice(NOME.indexOf(inputnome.value), 1);
};