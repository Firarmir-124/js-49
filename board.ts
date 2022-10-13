let board = '';


for(let i = 0; i < 8; i++) {
    board += '\n';
    for(let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
            board += '██';
        } else {
            board += '  ';
        }
    }
}

console.log(board);