$(document).ready(function(){

    SetTitulo();

    $('#btsubmit').click(function() {
       Salvar();
    });
  });

function SetTitulo()
{
    obj = JSON.parse(titulos);
    document.getElementById("json-titulo-contato").innerHTML = obj.titulos[1].contato;

    obj = JSON.parse(contato);
    document.getElementById("json-endereco1").innerHTML = obj.endereco[0].local1;
    document.getElementById("json-endereco2").innerHTML = obj.endereco[0].local2;

    document.getElementById("json-email1").innerHTML = obj.endereco[1].email1;
    document.getElementById("json-email2").innerHTML = obj.endereco[2].email2;

    document.getElementById("json-telefone1").innerHTML = obj.endereco[3].telefone1;
    document.getElementById("json-telefone2").innerHTML = obj.endereco[4].telefone2;
}

function Salvar(){
    var arrayCheck = Validar();

    if(arrayCheck.length == 0)
        Sucesso();
    else
        NaoSucesso(arrayCheck);
}

function Validar()
{
    var arrayCampoOk = [];

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if(! EstaOk(username))
        arrayCampoOk.push("Nome");

    if(! EstaOk(subject))
        arrayCampoOk.push("Assunto");

    if(! EstaOk(email))
        arrayCampoOk.push("E-mail");

    if(! EstaOk(message)){
        arrayCampoOk.push("Mensagem");
    }
   
    return arrayCampoOk;
}

function EstaOk(campo)
{
    if(campo.length == 0)
        return false;
    else
        return true;
}

function Sucesso()
{
    $('.alert').text("Sucesso!");
    $('.alert').removeClass("alert-warning");
    $('.alert').addClass("alert-success");
    $('.alert').show();
}

function NaoSucesso(arrayCheck)
{
    $('.alert').html("<strong>Campos obrigatórios</strong>");
    for(var i = 0; i < arrayCheck.length; i++)
    {
        $('.alert').append("<br>" + arrayCheck[i]);
    }
   
    $('.alert').removeClass("alert-success");
    $('.alert').addClass("alert-warning");
    $('.alert').show();
}
