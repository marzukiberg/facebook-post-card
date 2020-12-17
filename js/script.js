// init
const $ = (el) => document.querySelector(el);
const reactCounter = $("#react-counter"),
  likeButton = $("#like-button"),
  commentsButton = $("#comments-button"),
  commentsSection = $(".comments-section"),
  btnCloseComments = $("#btn-close-comments"),
  footerAction = $(".footer-action"),
  moreReactButtons = $(".more-react-buttons"),
  like = $("#like"),
  love = $("#love");
let state = {
  likes: 1322,
  react: null,
};

// function
function updateState() {
  switch (state.react) {
    case null:
      likeButton.innerHTML = `<i class="fa fa-thumbs-o-up"></i>
      <span>Suka</span>`;
      break;
    case "like":
      likeButton.innerHTML = `<img src="images/like.png" width="16" height="16">
      <span class="blue">Suka</span>`;
      break;
    case "love":
      likeButton.innerHTML = `<img src="images/love.png" width="16" height="16">
      <span class="pink">Super</span>`;
      toggleMoreReacts();
      break;
    case "laugh":
      likeButton.innerHTML = `<img src="images/laugh.png" width="16" height="16">
      <span class="yellow">Haha</span>`;
      toggleMoreReacts();
      break;
    case "sad":
      likeButton.innerHTML = `<img src="images/sad.png" width="16" height="16">
        <span class="yellow">Sedih</span>`;
      toggleMoreReacts();
      break;
    case "angry":
      likeButton.innerHTML = `<img src="images/angry.png" width="16" height="16">
          <span class="yellow">Marah</span>`;
      toggleMoreReacts();
      break;
    default:
      break;
  }
}

function toggleMoreReacts(e) {
  footerAction.classList.toggle("show-react");
}
function toggleLike() {
  likeButton.innerHTML = `<img src="images/like.png" width="16" height="16">
  <span class="blue">Suka</span>`;
  toggleMoreReacts();
}
function toggleLove() {
  likeButton.innerHTML = `<img src="images/love.png" width="16" height="16">
  <span class="pink">Super</span>`;
  toggleMoreReacts();
}
function toggleComments() {
  commentsSection.classList.toggle("show");
}

// trigger
likeButton.addEventListener("click", (e) => {
  state.react = state.react == null ? "like" : null;
  updateState();
});
likeButton.addEventListener("long-press", toggleMoreReacts);
window.addEventListener(
  "mouseup",
  () => footerAction.classList.contains("show-react") && toggleMoreReacts()
);
moreReactButtons.addEventListener("mouseup", (e) => e.stopPropagation());
commentsButton.addEventListener("click", toggleComments);
btnCloseComments.addEventListener("click", toggleComments);

like.addEventListener("click", () => ((state.react = "like"), updateState()));
love.addEventListener("click", () => ((state.react = "love"), updateState()));
laugh.addEventListener("click", () => ((state.react = "laugh"), updateState()));
wow.addEventListener("click", () => ((state.react = "wow"), updateState()));
sad.addEventListener("click", () => ((state.react = "sad"), updateState()));
angry.addEventListener("click", () => ((state.react = "angry"), updateState()));

updateState();
