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

// Forms
// listen to form submit event
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

// handles form submission
function handleSubmit(event) {
  // prevent default form submission
  event.preventDefault();

  // get form input data
  const question = document.querySelector("#question").value;
  const answer = document.querySelector("#answer").value;
  const tags = document.querySelector("#tag").value;

  // create new card element
  const card = document.createElement("div");
  card.classList.add("card");

  // create bookmark icon element
  const icon = document.createElement("img");
  icon.src = "css/icons/bookmarki_mini.jpg";
  icon.alt = "Icon";
  icon.classList.add("icon");
  card.appendChild(icon);

  // create heading element
  const heading = document.createElement("h2");
  heading.textContent = "New Question";
  card.appendChild(heading);

  // create question text element
  const questionText = document.createElement("p");
  questionText.textContent = question;
  card.appendChild(questionText);

  // create answer button element
  const answerButton = document.createElement("button");
  answerButton.classList.add("answer-button");
  answerButton.textContent = "Antwort anzeigen";
  answerButton.addEventListener("click", handleAnswerButtonClick);
  card.appendChild(answerButton);

  // create answer text element
  const answerText = document.createElement("p");
  answerText.classList.add("answer");
  answerText.textContent = answer;
  answerText.style.display = "none";
  card.appendChild(answerText);

  // create tags element
  const tagsText = document.createElement("p");
  tagsText.classList.add("tags");
  tagsText.textContent = tags;
  card.appendChild(tagsText);

  // insert new card below the form
  const contentWrapper = document.querySelector(".content-wrapper");
  contentWrapper.appendChild(card);

  // clear form input fields
  form.reset();
}

// handles answer button click
function handleAnswerButtonClick(event) {
  const answerText = event.target.parentNode.querySelector(".answer");
  answerText.style.display = "block";
  event.target.style.display = "none";
}
