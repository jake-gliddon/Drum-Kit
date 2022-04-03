//Functions 

function btnAnimation(currentKey) {
    let activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add("pressed");
    setTimeout (function() {
        activeBtn.classList.remove("pressed");
    }, 100);

}

function handleClick() {
    let btnID = this.innerHTML;
    btnAnimation(btnID);
    switch (btnID) {
        case 'w':
            let snd = new Audio('./sounds/tom-1.mp3')
            snd.play()
            break;
        case 'a':
            let snd1 = new Audio('./sounds/tom-2.mp3')
            snd1.play()
            break;
        case 's':
            let snd2 = new Audio('./sounds/tom-3.mp3')
            snd2.play()
            break;
        case 'd':
            let snd3 = new Audio('./sounds/tom-4.mp3')
            snd3.play()
            break;
        case 'j':
            let snd4 = new Audio('./sounds/snare.mp3')
            snd4.play()
            break;
        case 'k':
            let snd5 = new Audio('./sounds/crash.mp3')
            snd5.play()
            break;
        case 'l':
            let snd6 = new Audio('./sounds/kick-bass.mp3')
            snd6.play()
            break;
        default:
            snd4.play()
            break;
    };

};

function makesound(key) {
    btnAnimation(key);
    switch (key) {
        case 'w':
            let snd = new Audio('./sounds/tom-1.mp3')
            snd.play()
            break;
        case 'a':
            let snd1 = new Audio('./sounds/tom-2.mp3')
            snd1.play()
            break;
        case 's':
            let snd2 = new Audio('./sounds/tom-3.mp3')
            snd2.play()
            break;
        case 'd':
            let snd3 = new Audio('./sounds/tom-4.mp3')
            snd3.play()
            break;
        case 'j':
            let snd4 = new Audio('./sounds/snare.mp3')
            snd4.play()
            break;
        case 'k':
            let snd5 = new Audio('./sounds/crash.mp3')
            snd5.play()
            break;
        case 'l':
            let snd6 = new Audio('./sounds/kick-bass.mp3')
            snd6.play()
            break;
        default:
            // snd4.play()
            break;
    };
};

//btn clicks listener

let btn = document.querySelectorAll(".drum");

btn.forEach( btn => {
    btn.addEventListener("click", handleClick);
});

document.addEventListener("keydown", function(event){
    makesound(event.key);
});