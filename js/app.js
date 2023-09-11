document.addEventListener("DOMContentLoaded", function () {
  const ratingForm = document.getElementById("rating-form");
  const thankYouMessage = document.getElementById("thank-you");
  const selectedRating = document.getElementById("selected-rating");
  const ratingLabels = document.querySelectorAll(".rating label");

  let userRating = null;

  ratingLabels.forEach((label) => {
    label.addEventListener("click", function () {
      ratingLabels.forEach((l) => l.classList.remove("selected"));

      this.classList.add("selected");

      userRating = this.textContent;
    });
  });

  ratingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (userRating !== null) {
      selectedRating.textContent = userRating;
      thankYouMessage.style.display = "block";
      ratingForm.style.display = "none";
    }
  });
});
