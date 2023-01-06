$(document).ready(function() {
    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })
    $('#rg').mask('00.000.000-0', {
        placeholder: '00.000.000-0'
    })
    $('#cpf2').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })
    $('#tel-conjuge').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })
    $('#cel1').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })
    $('#cel2').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })
    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    })
})

const form = document.getElementById('form-cadastro');

function validaNome(nomeCompleto){
    const nomecomoArray = nomeCompleto.split(' ');
    return nomecomoArray.length >= 2;
}
form.addEventListener('submit', function(e){
    var formEvalido = false;
    e.preventDefault();
    const nomefuncionario = document.getElementById('nome')
    const generoDoFuncionario = document.getElementById('genero')
    const cpfDoFuncionario = document.getElementById('cpf');
    const RgDoFuncionario = document.getElementById('rg');
    const EstadoCivil = document.getElementById('ec');
    const conjugeDoFuncionario = document.getElementById('conjuge');
    const instrucaoDoFuncionario = document.getElementById('instrucao');
    const formacaoDoFuncionario = document.getElementById('formacao');
    const PaiDoFuncionario = document.getElementById('nome-pai');
    const MaeDoFuncionario = document.getElementById('nome-mae');
    const Telefone = document.getElementById('tel');
    const celular1 = document.getElementById('cel1');
    const celular2 = document.getElementById('cel2');
    const endereco = document.getElementById('address');
    const cidade = document.getElementById('municipio');
    const EstadoD = document.getElementById('estado');
    const cpfDoConjuge = document.getElementById('cpf2');
    const telefone2 = document.getElementById('tel-conjuge');
    const cepDoFuncionario = document.getElementById('cep');
    const mensagemSucesso1 = ('Funcionario : '+ nomefuncionario.value + ' cadastrado com sucesso: ');

    formEvalido = validaNome(nomefuncionario.value)
    if(formEvalido){
        alert (mensagemSucesso1);
        nomefuncionario.value = '';
        generoDoFuncionario.value = '';
        cpfDoFuncionario.value = '';
        RgDoFuncionario.value = '';
        EstadoCivil.value = '';
        conjugeDoFuncionario.value = '';
        instrucaoDoFuncionario.value = '';
        formacaoDoFuncionario.value = '';
        PaiDoFuncionario.value = '';
        MaeDoFuncionario.value = '';
        Telefone.value = '';
        celular1.value = '';
        celular2.value = '';
        endereco.value = '';
        cidade.value = '';
        EstadoD.value = '';
        cpfDoConjuge.value = '';
        telefone2.value = '';
        cepDoFuncionario.value ='';
    }else{
        alert ('o nome nao esta completo');
    }
})