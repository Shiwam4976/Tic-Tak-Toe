

let currentPlayer = 'X';
let arr = Array(9).fill(null);
let gameOver = false;

function checkWinner() {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
        if (arr[a] !== null && arr[a] === arr[b] && arr[b] === arr[c]) {
            return arr[a];
        }
    }
    return null;
}

function _showResult(text) {
    const statusEl = document.getElementById('status');
    if (statusEl) {
        statusEl.innerText = text;
    } else {
        alert(text);
    }
}

function handleClick(el) {
    if (gameOver) return;
    const id = Number(el.id);
    if (Number.isNaN(id)) return;
    if (arr[id] !== null) return;

    arr[id] = currentPlayer;
    el.innerText = currentPlayer;

    const winner = checkWinner();
    if (winner) {
        _showResult(`Winner is ${winner}`);
        gameOver = true;
        return;
    }

    if (arr.every(cell => cell !== null)) {
        _showResult("It's a draw!");
        gameOver = true;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
    arr = Array(9).fill(null);
    currentPlayer = 'X';
    gameOver = false;
    const statusEl = document.getElementById('status');
    if (statusEl) statusEl.innerText = '';
    document.querySelectorAll('.col').forEach(el => el.innerText = '');
}