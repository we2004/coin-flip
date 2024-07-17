const coin = ['heads', 'tails'];
let userMove;
let started = false;

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
    if (userMove === computer) {
        $('p').html('you won!');
    } else {
        $('p').html('you lost!');
    }
}

function resetGame() {
    started = false;
    $('p').html('flip the coin!');
    $('.computer-move').html("the computer's choice");
}

function buttonAnimate(user) {
    $(`#${user}`).fadeOut().fadeIn();
}

