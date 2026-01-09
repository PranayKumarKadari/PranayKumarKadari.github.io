// Force dark mode on every load
(function () {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
})();
