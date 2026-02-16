const box = document.getElementById('fursone');

let hasFallen = false;
let phrases = ["I feel so sigma", "Че вылупился?", "Что-то не устраивает?", "Welcome to my island"];
let i = 0;
box.addEventListener('click', () => {
    if (!hasFallen) {
        hasFallen = 1;
        box.classList.remove('relax');
        box.style.backgroundImage = "url('Images/Paintings/Chibi/falling_fursone.PNG')";
        box.style.backgroundPositionY = "center";
        box.style.width = "13vw";
        box.style.height = "13vw";
        box.style.pointerEvents = "none";
        box.classList.toggle('is_clicked');
        box.addEventListener('animationend', function handler1() {
            box.style.backgroundImage = "url('Images/Paintings/Chibi/static_avatar.PNG')"
            document.getElementById('fursone').classList.remove('is_clicked');
            box.style.pointerEvents = "auto";
            void box.offsetWidth;
            box.classList.toggle('is_appeared');
        }, {once: true} );
    }

    else {
        if ( i === 10 ) {

        }
        i++;
        let index = Math.floor(Math.random()*4);
        const txt = document.getElementById('dynamic_txt');
        txt.textContent = phrases[index];
        txt.classList.toggle('talk');
        box.style.pointerEvents = "none";
        txt.addEventListener('animationend', function handler1() {
            txt.classList.remove('talk');
            box.style.pointerEvents = "auto";
        });
    }
});

const container = document.querySelector(".container"),
    images = document.querySelectorAll(".big_topic"),
    buttonL = document.querySelector("#left_button"),
    buttonR = document.querySelector("#right_button")
    carousel = document.querySelector(".carousel");

let ImageIndex = 0, intervalID;
const autoSlide = () => {
    clearInterval(intervalID);
    intervalID = setInterval(() => slideImage(++ImageIndex),2000);
}
autoSlide();
const slideImage = () => {
    ImageIndex = ImageIndex === images.length ? 0: ImageIndex < 0 ? images.length -1 : ImageIndex;
    carousel.style.transform = `translate(-${ImageIndex*88}vw)`;
};

container.addEventListener("mouseover", () => clearInterval(intervalID));
container.addEventListener("mouseleave",autoSlide);

const updateClick = (e) => {
    clearInterval(intervalID);
    ImageIndex+=e.target.id === "right_button" ? 1 : -1;
    slideImage(ImageIndex);
    autoSlide();
}

buttonL.addEventListener("click",updateClick);
buttonR.addEventListener("click",updateClick);