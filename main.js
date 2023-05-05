document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".answer-button").forEach((button) =>
    button.addEventListener("click", () => {
      const answerParagraph = button.nextElementSibling;
      answerParagraph.style.display =
        answerParagraph.style.display === "none" ? "block" : "none";
    })
  );
});
document.addEventListener("DOMContentLoaded", () => {
  // Toggle bookmark icon
  document.querySelectorAll(".icon").forEach((icon) =>
    icon.addEventListener("click", () => {
      icon.classList.toggle("bookmarked");
    })
  );

  // Toggle answer visibility and update button text
  document.querySelectorAll(".answer-button").forEach((button) =>
    button.addEventListener("click", () => {
      const answerParagraph = button.nextElementSibling;
      const isHidden = answerParagraph.classList.toggle("hidden");
      button.textContent = isHidden ? "Antwort anzeigen" : "Antwort verbergen";
    })
  );
});
