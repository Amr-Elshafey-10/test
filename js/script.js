let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie! 🤝";
        document.body.style.backgroundColor = "#f4f4f4";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `You Win! 🎉 (${playerChoice} beats ${computerChoice})`;
        playerScore++;
        document.body.style.backgroundColor = "lightgreen";
    } else {
        result = `You Lose! 😢 (${computerChoice} beats ${playerChoice})`;
        computerScore++;
        document.body.style.backgroundColor = "lightcoral";
    }

    document.getElementById("result").textContent = result;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    setTimeout(() => {
        document.body.style.backgroundColor = "#f4f4f4";
    }, 1000);
}
