const choice = ['ぐー✊', 'ちょき✌', 'ぱー✋'];
const msgJudge = ["【引き分け😑 / +1】", "【勝利!😄🎊🎊 / +3】", "【負け😧 / -4】"];

// 0～maxの整数で乱数生成
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// 判定
function judge(yourChoice, cpuChoice) {

    if (yourChoice == cpuChoice) {//相子パターン
    return 0;
    } else if (yourChoice == cpuChoice - 1 || (yourChoice == choice.length - 1 && cpuChoice == 0)) {// 勝ちパターン
    return 1;
    } else {// 負けパターン
    return 2;
    }
}

// じゃんけん実行
function janken(yourChoice) {
    // 乱数生成
      cpuChoice = getRandomInt(3);
    // 勝敗判定
      nJudge = judge(yourChoice, cpuChoice);

    // 結果表示
      // alert("YOU : " + choice[yourChoice] + "\n" + "CPU : " + choice[cpuChoice] + "\n\n" + msgJudge[nJudge]);
      $(".jibun").html(choice[yourChoice]);
      $(".cpu").html(choice[cpuChoice]);
      $(".result").html(msgJudge[nJudge]);
    };



// じゃんけん回数カウント
let count = 0;
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const countDisplay = document.getElementById("count");
function incrementCount() {
  count++;
  countDisplay.textContent = count;
}
rockBtn.addEventListener("click", incrementCount);
paperBtn.addEventListener("click", incrementCount);
scissorsBtn.addEventListener("click", incrementCount);

// 勝ち/あいこ/負け回数カウント
let wins = 0;
let draws = 0;
let losses = 0;
let totalScore = 0;

const winsDisplay = document.getElementById("wins");
const drawsDisplay = document.getElementById("draws");
const lossesDisplay = document.getElementById("losses");

function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  if (playerChoice === computerChoice) {
    draws++;
    drawsDisplay.textContent = draws;
    totalScore += 1;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    wins++;
    winsDisplay.textContent = wins;
    totalScore += 3;
  } else {
    losses++;
    lossesDisplay.textContent = losses;
    totalScore -= 4;
  }
  $(".totalScore").html(totalScore);

  const imageContainer = document.getElementById("imageContainer");
  imageContainer.innerHTML = ""; // 画像をクリア

    // 合計スコアに応じて画像を表示
  if (count === 10) {
    if (totalScore >= 20) {
      const image1 = document.createElement("img");
      image1.src = "/img/image1.png";
      imageContainer.appendChild(image1);
    } else if (totalScore < 0) {
      const image2 = document.createElement("img");
      image2.src = "/img/image2.png";
      imageContainer.appendChild(image2);
    } else {
      const image3 = document.createElement("img");
      image3.src = "/img/image3.png";
      imageContainer.appendChild(image3);
    }
  } else if (count > 10) {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = ""; // 画像をクリア
  }
  

}

rockBtn.addEventListener("click", function() {
  playGame("rock");
});

paperBtn.addEventListener("click", function() {
  playGame("paper");
});

scissorsBtn.addEventListener("click", function() {
  playGame("scissors");
});



