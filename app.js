const app = () => {
  const query = document.querySelector(".qu");
  const button = document.querySelector(".query");
  const so = document.querySelector(".sound");
  button.addEventListener("click", () => {
    query.textContent = `YES, You have made it.`;
    so.play();
  });
};

app();
