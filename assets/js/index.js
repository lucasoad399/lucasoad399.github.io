

const form = document.querySelector('.main-section-form');
console.log(form);
let imputValues =[];
let imprimir;
form.addEventListener('submit', e=>{
    e.preventDefault();
    const listImput = 
        document.querySelectorAll('.main-section-form input');
    console.log(listImput);
    listImput.forEach(el=>{
        imputValues.push(el.value);
    });
    console.log(imputValues);
    
    jogaNoStorage(imputValues);
    imprimir = window.open('paginaImprimir.html');
});

function jogaNoStorage(imputValues){
    sessionStorage.setItem('JsonIntima',  JSON.stringify(imputValues));
}


