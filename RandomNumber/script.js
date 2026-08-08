const userNumber = document.getElementById("userNumber");
const submitBtn = document.getElementById("submit-btn");

const onClick = () => {
  const userValue = Number(userNumber.value);

  if (userNumber.value === "") {
    alert("Enter a value...");
    return;
  }

  const computerNumber = Math.floor(Math.random() * 100) + 1;
  if (userValue === computerNumber) {
    alert("You won!");
  } else {
    alert(`You lose. Computer picked ${computerNumber}. Try again...`);
  }
};
submitBtn.addEventListener("click", onClick);
