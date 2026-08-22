// Scroll-reveal for index-style listing pages only (lesson path, reference
// list, hub track cards) — a group entrance a reader sees occasionally, not
// lesson prose someone reads once and shouldn't watch move.
// Markup contract: apply class="reveal" to each list item; this script adds
// "is-visible" as each one enters the viewport, with a small stagger.
// Honors prefers-reduced-motion by revealing everything immediately.
(function () {
  function reveal(el, delay) {
    setTimeout(function () {
      el.classList.add("is-visible");
    }, delay || 0);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var items = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    if (!items.length) return;

    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var seen = 0;
    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          reveal(entry.target, Math.min(seen, 8) * 45);
          seen++;
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    items.forEach(function (el) { observer.observe(el); });
  });
})();
