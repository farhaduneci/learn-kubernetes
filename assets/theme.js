// Dark/light theme toggle. Dark is the default (matches :root in style.css);
// an explicit choice is remembered in localStorage. The initial <head>
// inline script applies a saved "light" choice before first paint — this
// file only wires up the button and keeps its icon/label in sync.
// Markup contract: <button id="theme-toggle">.
(function () {
  var STORAGE_KEY = "theme";
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function isLight() {
    return root.getAttribute("data-theme") === "light";
  }

  function render() {
    if (isLight()) {
      btn.textContent = "☀️";
      btn.setAttribute("aria-label", "Switch to dark theme");
    } else {
      btn.textContent = "🌙";
      btn.setAttribute("aria-label", "Switch to light theme");
    }
  }

  btn.addEventListener("click", function () {
    if (isLight()) {
      root.removeAttribute("data-theme");
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {}
    } else {
      root.setAttribute("data-theme", "light");
      try {
        localStorage.setItem(STORAGE_KEY, "light");
      } catch (e) {}
    }
    render();
  });

  render();
})();
