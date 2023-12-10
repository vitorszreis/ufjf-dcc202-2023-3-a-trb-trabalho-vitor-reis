
// Variável para controlar o jogador atual
let currentPlayer = 1;

// Tabuleiros dos jogadores
const player1Board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
const player2Board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

// Função para rolar o dado
function rollDice() {
    // Lógica para gerar um número aleatório de 1 a 6 (representando o dado)
    const diceValue = Math.floor(Math.random() * 6) + 1;

    // Lógica para decidir em qual tabuleiro colocar o valor do dado
    const currentPlayerBoard = currentPlayer === 1 ? player1Board : player2Board;

    // Lógica para encontrar a primeira célula vazia e atribuir o valor do dado
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (currentPlayerBoard[i][j] === 0) {
                currentPlayerBoard[i][j] = diceValue;
                updateGameBoard(currentPlayer, currentPlayerBoard);
                switchPlayer();
                return;
            }
        }
    }
}

// Função para atualizar o tabuleiro na página
function updateGameBoard(player, board) {
    const boardElement = document.getElementById(`tabuleiroJogador${player}`);
    const cells = boardElement.getElementsByTagName('td');

    // Preenche as células da tabela com os valores do tabuleiro
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cellIndex = i * 3 + j;
            cells[cellIndex].textContent = board[i][j];
        }
    }
}

// Função para trocar o jogador
function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    
    // Se o jogador atual for 2, rolar dados automaticamente
    if (currentPlayer === 2) {
        setTimeout(() => {
            rollDice();
        }, 1000); // Adicione um atraso opcional (1 segundo) para tornar a rolagem visível
    }
}


