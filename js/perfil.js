/* Mudar Background */

const backgroundImg = document.querySelector('.perfil-content-background');
const sliderImgs = ["parque.jpg", "cozinhar.jpg", "teatro.jpg"];

setInterval(() =>{
    changeBackground();
}, 10000)

let currentImg = 0;

const changeBackground = () =>{
    if (currentImg >= sliderImgs.length - 1){
        currentImg = 0;
    } else{
        currentImg++;
    }

    backgroundImg.src = `img/${sliderImgs[currentImg]}`
};