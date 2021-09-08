function preencheCampo(arr, valorpreencher = ""){
    arr.forEach(el=>{
        el.innerHTML = valorpreencher;
    });
}

function formataData(strData){
    let data = new Date(strData);
    return data.toLocaleDateString();

}
document.querySelector('#now').innerHTML = new Date().toLocaleDateString();
let dadosPreencher = JSON.parse(sessionStorage.getItem('JsonIntima'));
console.log(dadosPreencher);
let spansBo = document.querySelectorAll('.nBo');
let spansNome = document.querySelectorAll('.nome');
let spansEnd = document.querySelectorAll('.endereco');
let spansDate = document.querySelectorAll('.date');
let spansTime = document.querySelectorAll('.time');
preencheCampo(spansBo, dadosPreencher[0]);
preencheCampo(spansNome, dadosPreencher[1]);
preencheCampo(spansEnd, dadosPreencher[2]);
preencheCampo(spansDate, formataData(dadosPreencher[3]));
preencheCampo(spansTime, dadosPreencher[4]);

spansDate.forEach(el=>{
    if(el.innerHTML =="Invalid Date") el.innerHTML = "";
});
