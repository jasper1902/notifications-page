const markAllAsRead = document.querySelector(".mark-all-as-read");

markAllAsRead.addEventListener("click", () => {
  const dotActive = document.querySelectorAll(".dot");
  dotActive.forEach((dot) => dot.classList.remove("dot"));

  const actives = document.querySelectorAll(".active");
  actives.forEach((active) => active.classList.remove("active"));

  const notificationCount = document.querySelector("#notification-count");
  notificationCount.textContent = "0";
});
