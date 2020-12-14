const $ = (el) => document.querySelector(el);
const likeButton = $("#like-button"),
  footerAction = $(".footer-action"),
  moreReactButtons = $(".more-react-buttons");

likeButton.addEventListener("click", (e) => {
  alert("hello");
});
likeButton.addEventListener("long-press", (e) => {
  showMoreReacts();
});
window.addEventListener("mouseup", () => {
  if (footerAction.classList.contains("show")) {
    showMoreReacts();
  }
});
moreReactButtons.addEventListener("mouseup", (e) => e.stopPropagation());

function showMoreReacts() {
  footerAction.classList.toggle("show");
}
