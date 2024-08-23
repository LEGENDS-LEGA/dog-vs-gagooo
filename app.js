document.addEventListener('DOMContentLoaded', function() {
    let countdownElement = document.getElementById('countdown');
    let gameElement = document.getElementById('game');
    let countdown = 3;
    let countdown3Audio = new Audio('sax/321.mp3');
    
    function playCountdownAudio() {
        if (countdown === 3) {
            countdown3Audio.play("sax/321.mp3");
        } 
    }
    
    function updateCountdown() {
        if (countdown > 0) {
            playCountdownAudio();
            countdownElement.textContent = countdown;
            countdown--;
        } else {
            countdownElement.style.display = 'none';
            gameElement.style.display = 'block';
            clearInterval(countdownInterval);
        }
    }
    
    let countdownInterval = setInterval(updateCountdown, 900);
    let monsterLife = document.getElementById('monsterLife');
    let playerLife = document.getElementById('playerLife');
    let monsterKick = document.getElementById('monsterKick');
    let monsterSuperKick = document.getElementById('monsterSuperKick');
    let monsterHealth = document.getElementById('monsterHealth');
    let playerKick = document.getElementById('playerKick');
    let playerSuperKick = document.getElementById('playerSuperKick');
    let playerHealth = document.getElementById('playerHealth');
    let monsterImage = document.getElementById('monsterImage');
    let playerImage = document.getElementById('playerImage');
    

    let myAudio1 = new Audio('sax/video - Trim1.mp4');
    let myAudio2 = new Audio('sax/video - Trim.mp4');
    let myAudio3 = new Audio('sax/hello - Trim4.mp4');

    let monsterAudioKick = new Audio('sax/yametekudasaicat.mp3');
    let monsterAudioSuperKick = new Audio('sax/yooooooooooooooooooooooooo-mpcut_lmdwcd.mp3');
    let monsterAudioHealth = new Audio('sax/oan1.mp3');
    
    let currentAudio = null;

    function changeHealth(progressBar, change) {
        let newValue = progressBar.value + change;
        if (newValue > 100) newValue = 100;
        if (newValue < 0) newValue = 0;
        progressBar.value = newValue;
    }

    function playAudio(audioElement) {
        if (currentAudio && currentAudio !== audioElement) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        audioElement.currentTime = 0;
        audioElement.play();
        currentAudio = audioElement;
    }
    

    function changeImage(character, action) {
        if (character === 'monster') {
            if (action === 'kick') {
                monsterImage.src = 'sax/Ggao2.jpg';
            } else if (action === 'superKick') {
                monsterImage.src = 'sax/Gago1.jpg';
            } else if (action === 'health') {
                monsterImage.src = 'sax/Gago.jpg';
            }
        } else if (character === 'player') {
            if (action === 'kick') {
                playerImage.src = 'sax/Screenshot 2024-06-08 025037.png';
            } else if (action === 'superKick') {
                playerImage.src = 'sax/Screenshot 2024-06-08 024921.png';
            } else if (action === 'health') {
                playerImage.src = 'sax/dog.jpg';
            }
        }
        console.log(`Changed ${character} image to ${action}`);
    }

    function addClickHandlers() {
        monsterKick.addEventListener('click', () => {
            const damage = -(Math.floor(Math.random() * 6) + 15);
            changeHealth(playerLife, damage);
            changeImage('monster', 'kick');
            playAudio(monsterAudioKick);  
        });

        monsterSuperKick.addEventListener('click', () => {
            const damage = -(Math.floor(Math.random() * 11) + 25);
            changeHealth(playerLife, damage);
            changeImage('monster', 'superKick');
            playAudio(monsterAudioSuperKick);  
        });

        monsterHealth.addEventListener('click', () => {
            const heal = Math.floor(Math.random() * 11) + 20;
            changeHealth(monsterLife, heal);
            changeImage('monster', 'health');
            playAudio(monsterAudioHealth);  
        });

        playerKick.addEventListener('click', () => {
            const damage = -(Math.floor(Math.random() * 6) + 15);
            changeHealth(monsterLife, damage);
            changeImage('player', 'kick');
            playAudio(myAudio2);
        });

        playerSuperKick.addEventListener('click', () => {
            const damage = -(Math.floor(Math.random() * 11) + 15);
            changeHealth(monsterLife, damage);
            changeImage('player', 'superKick');
            playAudio(myAudio1);
        });

        playerHealth.addEventListener('click', () => {
            const heal = Math.floor(Math.random() * 11) + 20;
            changeHealth(playerLife, heal);
            changeImage('player', 'health');
            playAudio(myAudio3);
        });
    }

    addClickHandlers();
});
