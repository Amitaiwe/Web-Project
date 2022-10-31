const cards = document.querySelectorAll('.card');
const counter = document.getElementById('time-remaining');

var timer = setInterval(tiktak, 1000);

const uname = sessionStorage.getItem('NAME');
const imported = sessionStorage.getItem('NUM');

const minutes = 5;
let time = minutes*60;

let rank = 0;
const points = 100;

function updateScore(){
    rank += points;
    document.getElementById('score').innerHTML= rank;
    if(rank == points*imported && rank > 0){
        clearInterval(timer);
        document.body.classList.add('opacity');
        alert(`${uname} you have got ${rank} points`);
    }
}

function tiktak(){
    if(time>=0){
        const seconds = time % 600;
        counter.innerHTML = `${seconds}`;
        time--;
    }
    else{alert("game over!!");}
}
let locking = false;//locking the cards while two cards are opening
let flipped = false;//first or second card I flip
let first;
let second;

let cardsToRemove = 0;
if(!imported){
    cardsToRemove = 0;
}
else{
    cardsToRemove = 12-imported;
}

console.log(imported)
console.log(uname)

if(cardsToRemove>=1){
    remove1();
}
if(cardsToRemove>=2){
    remove2()
}
if(cardsToRemove>=3){
    remove3()
}
if(cardsToRemove>=4){
    remove4()
}
if(cardsToRemove>=5){
    remove5()
}
if(cardsToRemove>=6){
    remove6()
}
if(cardsToRemove>=7){
    remove7()
}
if(cardsToRemove>=8){
    remove8()
}
if(cardsToRemove>=9){
    remove9()
}
if(cardsToRemove>=10){
    remove10()
}
function remove1(){
    document.getElementById("11").classList.add("hidden");
    document.getElementById("12").classList.add("hidden");
}
function remove2(){
    document.getElementById("21").classList.add("hidden");
    document.getElementById("22").classList.add("hidden");
}
function remove3(){
    document.getElementById("31").classList.add("hidden");
    document.getElementById("32").classList.add("hidden");
}
function remove4(){
    document.getElementById("41").classList.add("hidden");
    document.getElementById("42").classList.add("hidden");
}
function remove5(){
    document.getElementById("51").classList.add("hidden");
    document.getElementById("52").classList.add("hidden");
}
function remove6(){
    document.getElementById("61").classList.add("hidden");
    document.getElementById("62").classList.add("hidden");
}
function remove7(){
    document.getElementById("71").classList.add("hidden");
    document.getElementById("72").classList.add("hidden");
}
function remove8(){
    document.getElementById("81").classList.add("hidden");
    document.getElementById("82").classList.add("hidden");
}
function remove9(){
    document.getElementById("91").classList.add("hidden");
    document.getElementById("92").classList.add("hidden");
}
function remove10(){
    document.getElementById("101").classList.add("hidden");
    document.getElementById("102").classList.add("hidden");
}

function flip(){
    if(locking) return;
    if(this === first) return;
    this.classList.add('flip');
    if(!flipped){//first card
        flipped = true;
        first = this;
        return;
    }
    else{
        flipped = false;
        second = this;
        isMatch();
    }
}

function isMatch(){
    let isMatch = first.dataset.framework === second.dataset.framework;

    isMatch? freezing(): keepPlay();
}

function freezing(){
//same cards
    updateScore();
    first.removeEventListener('click', flip());
    second.removeEventListener('click', flip());
    reset();
}
function keepPlay(){
    //not the same
    locking = true;
    setTimeout(() => {
        first.classList.remove('flip');
        second.classList.remove('flip');
        reset();
        }, 1000);
}

function reset(){
    flip = false;
    locking = false;
    first = null;
    second = null;
}

(function shuffle(){
    cards.forEach(card => {
        let rand = Math.floor(Math.random() * 2*imported);
        card.style.order = rand;
    });
})();

cards.forEach(card => card.addEventListener('click',flip));