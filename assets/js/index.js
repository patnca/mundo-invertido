import { subscribeToHellfireClube } from './data/hellfire-clube.js'
const buttonTheme = document.querySelector('#switch-theme-button');

window.addEventListener('click', () => {
    const audio = document.getElementById('music');
    audio.play();
    audio.volume = 0.2;
});

buttonTheme.addEventListener('click' , () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    document.body.setAttribute('aria-label', 'Trocando o tema');

    const theme = document.body.classList[0];
    const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg'

    const audio = document.getElementById('music');
    audio.src = `assets/musics/${music}`;
    audio.play();
    audio.volume = 0.2;
});

(function main() {
    const txtName = document.getElementById('txtName')
    const txtEmail = document.getElementById('txtEmail')
    const txtLevel = document.getElementById('txtLevel')
    const txtCharacter = document.getElementById('txtCharacter')

    document.getElementById('btnSubscribe').addEventListener('click', async () => {
        const subscribe = {
            name: txtName.value,
            email: txtEmail.value,
            level: txtLevel.value,
            character: txtCharacter.value
        }

        const id = await subscribeToHellfireClube(subscribe)
        alert(`Inscrição ${id} adicionada com sucesso!`)
        
    })
})()

