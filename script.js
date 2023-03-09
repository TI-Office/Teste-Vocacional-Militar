function somarValores(){
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var atividade = document.getElementById("atividade").value;
    
    //var s3 = parseInt(s1) + parseInt(s2);
    if (atividade == 'mar'){
    document.querySelector(".atividade2").innerHTML = 'Parabéns! <b>'+nome+' </b> Você combina mais com as escolas relacionadas a marinha:<br> Colégio Naval, Escola Naval, EFOMM';
    } else if (atividade == 'terra'){ 
    document.querySelector(".atividade2").innerHTML = 'Parabéns! <b>'+nome+' </b> Você combina mais com as escolas relacionadas ao exercíto:<br> ExPCEx, AMAN, ESA, EAGS';
    } else if (atividade == 'céu'){ 
    document.querySelector(".atividade2").innerHTML = 'Parabéns! <b>'+nome+' </b> Você combina mais com as escolas relacionadas a aeronáutica:<br> EPCAR, EEAR, AFA, EAGS';
    } else {
        document.querySelector(".atividade2").innerHTML = 'Preencha todos os campos';
    }
}