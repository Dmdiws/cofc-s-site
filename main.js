const box = document.getElementById('fursone');

let hasFallen = false;
let phrases = ["I feel so sigma", "Че вылупился?", "Что-то не устраивает?", "Welcome to my island"];
let i = 0;
box.addEventListener('click', () => {
    if (!hasFallen) {
        hasFallen = 1;
        box.classList.remove('relax');
        box.style.backgroundImage = "url('images/falling_fursone.PNG')";
        box.style.backgroundPositionY = "center";
        box.style.width = "13vw";
        box.style.height = "13vw";
        box.style.pointerEvents = "none";
        box.classList.toggle('is_clicked');
        box.addEventListener('animationend', function handler1() {
            box.style.backgroundImage = "url('images/static_avatar.PNG')"
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
