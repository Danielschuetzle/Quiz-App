document.addEventListener("DOMContentLoaded", function () {
  const answerButtons = document.querySelectorAll(".answer-button");

  answerButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const answerParagraph = button.nextElementSibling;

      if (answerParagraph.style.display === "none") {
        answerParagraph.style.display = "block";
      } else {
        answerParagraph.style.display = "none";
      }
    });
  });
});
