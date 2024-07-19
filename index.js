const coin = ['heads', 'tails'];
const score = JSON.parse(localStorage.getItem('scoreFlipCoin')) ||
    { wins: 0, losses: 0 }
let userMove;
let started = false;
console.log(score);

$('.wins').html(`wins: ${score.wins}`);
$('.losses').html(`losses: ${score.losses}`);

$('button').click(function () {
    userMove = $(this).attr('id');
    if (!started) {
        const computerMove = coin[Math.floor(Math.random() * 2)];
        showComputerMove(computerMove);
        compareMoves(computerMove);
        started = true;
    } else {
        resetGame();
    }
    buttonAnimate(userMove);
})

function showComputerMove(computer) {
    $('.computer-move').html(computer);
}

function compareMoves(computer) {

    // userMove === computer ? $('.title').html('you won!') : $('.title').html('you lost!');


    if (userMove === computer) {
        $('.title').html('you won!');
        score.wins++;
    } else {
        $('.title').html('you lost!');
        score.losses++;
    }

    updateScore();
    saveScore();
}

function updateScore() {
    $('.wins').html(`wins: ${score.wins}`);
    $('.losses').html(`losses: ${score.losses}`);
}

function saveScore() {
    localStorage.setItem('scoreFlipCoin', JSON.stringify(score));
}

function resetGame() {
    started = false;
    $('.title').html('flip the coin!');
    $('.computer-move').html("the computer's choice");
}

function buttonAnimate(user) {
    $(`#${user}`).fadeOut().fadeIn();
}

$('.reset-score').click(function () {
    localStorage.removeItem('scoreFlipCoin');
    location.reload();

});
