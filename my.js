let userscore = 0;
let computerscore = 0;
const computerscore_span = document.getElementById("computer-score");
const userscore_span = document.getElementById("player-score"); 
const scoreboard_div = document.querySelector(".cp");
const result_p = document.querySelector(".result > p");
const rock_button = document.getElementById("r");
const paper_button = document.getElementById("p");
const scissor_button = document.getElementById("s");
const playerEmoji = document.querySelector(".playersection .emojibox");
const computerEmoji = document.querySelector(".computersection .emojibox");

const emojis = {
    r: "👊",
    p: "✋",
    s: "✌️"
};

function getcomputerchoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userchoice, computerchoice) {
    userscore++;
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    result_p.innerHTML = "Player wins!";
    playerEmoji.textContent = emojis[userchoice];
    computerEmoji.textContent = emojis[computerchoice];
}

function lose(userchoice, computerchoice) {
    computerscore++;
    computerscore_span.innerHTML = computerscore;
    userscore_span.innerHTML = userscore;
    result_p.innerHTML = "Computer wins!";
    playerEmoji.textContent = emojis[userchoice];
    computerEmoji.textContent = emojis[computerchoice];
}

function draw(userchoice, computerchoice) {
    result_p.innerHTML = "It's a draw!";
    playerEmoji.textContent = emojis[userchoice];
    computerEmoji.textContent = emojis[computerchoice];
}

function game(userchoice) {
    const computerchoice = getcomputerchoice();
    switch (userchoice + computerchoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userchoice, computerchoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userchoice, computerchoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userchoice, computerchoice);
            break;
    }
}

function master() {
    rock_button.addEventListener('click', function () {
        game("r");
    });

    paper_button.addEventListener('click', function () {
        game("p");
    });

    scissor_button.addEventListener('click', function () {
        game("s");
    });
}

document.addEventListener('DOMContentLoaded', master);
