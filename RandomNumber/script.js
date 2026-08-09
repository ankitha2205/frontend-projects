const userNumber = document.getElementById("userNumber");
const submitBtn = document.getElementById("submit-btn");

const score = {
  win: 0,
  lose: 0,
};

const onClick = () => {
  const userValue = Number(userNumber.value);

  if (userNumber.value === "") {
    alert("Enter a value...");
    return;
  }

  const computerNumber = Math.floor(Math.random() * 10) + 1;
  if (userValue === computerNumber) {
    score.win++;
    alert(`🎉 You won! Score: win = ${score.win}, lose = ${score.lose}`);
  } else {
    score.lose++;
    alert(
      `❌ You lose. Computer picked ${computerNumber}. Score: win = ${score.win}, lose = ${score.lose}`,
    );
  }
};

submitBtn.addEventListener("click", onClick);
