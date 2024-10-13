const spinnerWrapper = document.querySelector(".spinner-wrapper");
window.addEventListener("load", () => {
  spinnerWrapper.computedStyleMap.opacity = "0";

  setTimeout(() => {
    spinnerWrapper.style.display = "none";
  }, 200);
});
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
