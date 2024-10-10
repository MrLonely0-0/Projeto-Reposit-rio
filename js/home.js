const menu = document.querySelector('.menu');
const fechar = document.querySelector('.fechar');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', ()=>{
    navLinks.style.right = '0';
})

fechar.addEventListener('click', () =>{
    navLinks.style.right = '-250px';
})


/* Mudar os Relatos */

const testemunhas = [
    {
        relato:'“O Renascer me ajudou a enxergar alguns malefícios do cigarro eletrônico que nem conhecia e pude trocar experiências com outras pessoas que estavam passando pelo mesmo problema.”',
        perfil:'lucca.jpg',
        nome:'Lucca Duarte',
        local:'Recife, PE'
    },
    {
        relato:'"Não me senti julgado em momento algum. Pelo contrário, senti que estava entre pessoas que compreendiam verdadeiramente os desafios do tabagismo e estavam dispostas a ajudar."',
        perfil:'eduardo.jpg',
        nome:'Eduardo Melo',
        local:'Jaboatão dos Guararapes, PE'
    },
    {
        relato:'"O fórum da comunidade é um espaço acolhedor e informativo. Encontrei uma riqueza de recursos úteis, desde dicas práticas para lidar com os desejos por cigarro até informações atualizadas sobre terapias de substituição de nicotina e técnicas de relaxamento."',
        perfil:'fernanda.jpg',
        nome:'Fernanda Soares',
        local:'Paulista, PE'
    },
    {
        relato:'"O aspecto mais reconfortante é que a comunidade Renascer é um espaço seguro para ser vulnerável. Não há pressão para ser perfeito, apenas um incentivo genuíno para seguir em frente, mesmo quando os dias são difíceis."',
        perfil:'maria.jpg',
        nome:'Maria Alves',
        local:'Ibura, PE'
    }
]

let relato = document.querySelector('.relato');
let perfilNome = document.querySelector('.perfil-nome');
let perfilImg = document.querySelector('.perfil-img img');
let perfilLocation = document.querySelector('.perfil-location');

const rightBtn = document.querySelector('.right');
const leftBtn = document.querySelector('.left');

let currentTest = 0;

rightBtn.addEventListener('click', () =>{
    if(currentTest >= testemunhas.length - 1){
        currentTest = 0;
    }
    else{
        currentTest++;
    }

    leftBtn.classList.remove('selected');
    rightBtn.classList.add('selected');

    relato.innerHTML = testemunhas[currentTest].relato.slice(0, 178);
    perfilImg.src = `img/${testemunhas[currentTest].perfil}`
    perfilNome.innerHTML = testemunhas[currentTest].nome;
    perfilLocation.innerHTML = testemunhas[currentTest].local;

})

leftBtn.addEventListener('click', () =>{
    if(currentTest <= 0){
        currentTest = testemunhas.length-1;
    }
    else{
        currentTest--;
    }

    rightBtn.classList.remove('selected');
    leftBtn.classList.add('selected');

    relato.innerHTML = testemunhas[currentTest].relato.slice(0, 178);
    perfilImg.src = `img/${testemunhas[currentTest].perfil}`
    perfilNome.innerHTML = testemunhas[currentTest].nome;
    perfilLocation.innerHTML = testemunhas[currentTest].local;
})