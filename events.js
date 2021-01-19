let blo = document.getElementById('botao');
let bla = document.getElementById('botao2');
let foto = document.getElementById('foto');

let rot = 7;
let rut = rot - 7;
let rightrot = 0;

const rotright = (evento) => {

    foto.style.transform =  'rotate(' + rot + 'deg)';
    rot += 7;
}

const rotleft = (evento) => {

    foto.style.transform =  'rotate(' + rut + 'deg)';
    rut -= 7;
}

bla.onclick = rotright;

blo.onclick = rotleft;
