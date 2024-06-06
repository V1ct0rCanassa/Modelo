const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');

let idx = 0;

let botaoMenu = document.getElementById('botaoMenu');
let barraLateral = document.getElementById('barralateral');

function slide() {
    idx++;
    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 100}%)`;
}

setInterval(slide, 3000);


// Função para alternar a barra lateral
function alternarBarra() {
    event.preventDefault();
    if (barraLateral.style.display === 'flex') {
        barraLateral.style.display = 'none';
        barraLateral.style.position = 'none';
    } else {
        barraLateral.style.display = 'flex';
        botaoMenu.style.rotate = '180deg';
    }
}

// Função para fechar a barra lateral
function fecharBarra() {
    barraLateral.style.display = 'none';
}
document.addEventListener('click', function(event) {
    if (!barraLateral.contains(event.target) && !botaoMenu.contains(event.target)) {
        fecharBarra();
    }
});
// Eventos
botaoMenu.addEventListener('click', alternarBarra);
barraLateral.addEventListener('mouseleave', fecharBarra);