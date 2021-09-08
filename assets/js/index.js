

const form = document.querySelector('.main-section-form');
console.log(form);
let imputValues =[];
let listImput =[];
let imprimir;
form.addEventListener('submit', e=>{
    e.preventDefault();
    // Zerando todos os arrays
    sessionStorage.clear('');
    sessionStorage.removeItem('JsonIntima');
    listImput = [];
    imputValues = [];
    
    listImput = 
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
    sessionStorage.clear('');
    sessionStorage.setItem('JsonIntima',  JSON.stringify(imputValues));
}


