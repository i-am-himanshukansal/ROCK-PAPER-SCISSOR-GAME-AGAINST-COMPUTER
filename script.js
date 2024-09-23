let resetbtn = document.querySelector("#resetbtn");
let user = document.querySelector("#user"); // User score
let comp = document.querySelector("#computer"); // Computer score
let dr = document.querySelector("#draw"); // Draw score
let msg = document.querySelector("#msg"); // Message display

let choices = document.querySelectorAll(".choice");

let userscore = 0;
let compscore = 0;
let drawscore = 0;

// Reset button event listener
resetbtn.addEventListener("click", () => {
    console.log("clicked");
    userscore = 0;
    compscore = 0;
    drawscore = 0;
    user.innerText = userscore;
    comp.innerText = compscore;
    dr.innerText = drawscore;
    msg.innerText = "GAME IS RESET NOW";
    msg.style.backgroundColor = "lightgray"; // Light background for reset message
});

// Function to get computer's choice
const getComputerChoice = () => {
    const option = ["stone", "paper", "scissor"];
    let luckyNumber = Math.floor(Math.random() * 3); // 0, 1, 2
    console.log(luckyNumber);
    return option[luckyNumber];
};
// Function to determine game result
const gameResult = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        msg.innerText = "GAME WAS DRAW";
        drawscore++;
        dr.innerText = drawscore;
        msg.style.backgroundColor = "#bac3cb";
        msg.style.color = "black";
    } else if (
        (userChoice === "stone" && compChoice === "scissor") ||
        (userChoice === "scissor" && compChoice === "paper") ||
        (userChoice === "paper" && compChoice === "stone")
    ) {
        msg.innerText = "YOU WON";
        userscore++;
        user.innerText = userscore;
        msg.style.backgroundColor = "lightgreen"; // Light green for win
    } else {
        msg.innerText = "COMPUTER WON";
        compscore++;
        comp.innerText = compscore;
        msg.style.backgroundColor = "lightcoral"; // Light red for loss
    }
};

// Event listeners for choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => { // User choice taken by clicking on divs with ids: stone, paper, scissor
        const userChoice = choice.getAttribute("id");
        let compChoice = getComputerChoice();
        console.log(userChoice, compChoice);
        gameResult(userChoice, compChoice);
    });
});
