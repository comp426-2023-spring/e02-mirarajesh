const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function gamewinner(player, opponent) {
    const rules = {
        rock: ['scissors', 'lizard'],
        paper: ['rock', 'spock'],
        scissors: ['paper', 'lizard'],
        lizard: ['paper', 'spock'],
        spock: ['rock', 'scissors'],
    };
    if (player === opponent) {
        return 'tie';
    } else if (rules[player].includes(opponent)) {
        return 'win';
    } else {
        return 'lose';
    }
}

function rpslsStd() {
    const player = choices[Math.floor(Math.random() * choices.length)];
    const opponent = choices[Math.floor(Math.random() * choices.length)];
    const result = gamewinner(player, opponent);
    return { player, opponent, result };
}

function rpsStd() {
    const player = choices[Math.floor(Math.random() * 3)];
    const opponent = choices[Math.floor(Math.random() * 3)];
    const result = gamewinner(player, opponent);
    return { player, opponent, result };
}

function rps(shot) {
    const player = shot;
    const opponent = choices[Math.floor(Math.random() * 3)];
    const result = gamewinner(player, opponent);
    return { player, opponent, result };
}

function rpsls(shot) {
    const player = shot;
    const opponent = choices[Math.floor(Math.random() * choices.length)];
    const result = gamewinner(player, opponent);
    return { player, opponent, result };
}

export default {
    rpslsStd,
    rpsStd,
    rps,
    rpsls,
};