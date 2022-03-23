

// ROCK PAPER SCISSORS GAME//

export const playRockGame = () => {
    return 'PLAY'
}

export const startRockGame = () => {
    return 'START'
}

export const resultRockGame = () => {
    return 'RESULT'
}
export const quitRockGame = () => {
    return 'QUIT'
}
export const playAgainRockGame = () => {
    return 'QUIT GAME'
}

export const generateRandomNumber = () => { 

    const number = Math.floor(Math.random() * 3) + 1;
    return number;
}
// END OF ROCK PAPER SCISSORS GAME//
