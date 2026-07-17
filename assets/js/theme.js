(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
  }

  function currentTheme() {
    const attr = root.getAttribute("data-theme");
    if (attr) return attr;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function updateToggleLabel() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.textContent = currentTheme() === "dark" ? "☀️" : "🌙";
  }

  window.addEventListener("DOMContentLoaded", function () {
    updateToggleLabel();
    const btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        const next = currentTheme() === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
        updateToggleLabel();
      });
    }
  });
})();
