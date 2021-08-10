var vaga = document.querySelector('.d-1-1 span');
var cargo = document.querySelector('.d-1-2 span');
var descricao = document.querySelector('.d-1-4');


var aviso = document.querySelector('.d-2');
var lateral = document.querySelector('.d-1-right');
var numeros = document.querySelector('.d-1-3');


var numero = '';
var votobranco = true;
var etapaAtual = 0;

function Comecaretapa(){
    let etapa = etapas[etapaAtual];
    votobranco = false;
    numero = '';
    let numeroHTML = '';

    for(let i=0; i<etapa.numeros;i++){
        if(i === 0){
            numeroHTML += '<div class="numero pisca"></div>';
        } else{
            numeroHTML += '<div class="numero"></div>';
        }
    }
    vaga.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML='';
    aviso.style.display= 'none';
    lateral.innerHTML='';
    numeros.innerHTML = numeroHTML;
}

function atualizatela(){
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero == numero){
            return true;
        }else{
            return false;
        }
    });
    if(candidato.length > 0){
        candidato = candidato[0];
        vaga.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;
        let fotosHTML = '';
        for(var i in candidato.fotos){
            fotosHTML += `<div class="d-1-image">
                          <img src="${candidato.fotos[i].url}" alt=""/>
                          ${candidato.fotos[i].legenda}
                          </div>`;
        }
        lateral.innerHTML = fotosHTML;
    }else{
        vaga.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
    }

    console.log("Candidato", candidato);
}

function clicou (n){
    var num = document.querySelector('.numero.pisca');
    if(num !== null){
        num.innerHTML = n;
        numero = `${numero}${n}`;
        num.classList.remove('pisca');
        if(num.nextElementSibling !== null){
        num.nextElementSibling.classList.add('pisca');
        }else{
            atualizatela();
        }
    }
}
function branco(){
    if(numero === ''){
        votobranco = true;
        vaga.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = '';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
    }else{
        alert("Apague os numeros.");
    }
}
function corrige(){
    Comecaretapa();
}
function confirma(){
    let etapa = etapas[etapaAtual];
    if(votobranco === true){
        console.log("Confirmando voto branco");
    }else if(numero.length === etapas.numeros){
        console.log("Confirmando como"+numero);
    }
}

Comecaretapa();