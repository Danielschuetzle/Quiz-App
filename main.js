document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".answer-button").forEach((button) =>
    button.addEventListener("click", () => {
      const answerParagraph = button.nextElementSibling;
      answerParagraph.style.display =
        answerParagraph.style.display === "none" ? "block" : "none";
    })
  );
});
