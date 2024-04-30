let recomendados = document.getElementById('informacoesMenu');
let section = document.getElementById('section');
recomendados.addEventListener('click', function(){
    if (section.style.display === 'none'){
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
});