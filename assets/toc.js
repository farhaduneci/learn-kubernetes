// Builds the "On this page" table of contents from the page's own h2[id]
// headings, so a heading's text/id is authored in exactly one place.
// Markup contract: <nav class="toc" data-toc><div class="toc-title">On this page</div></nav>
(function () {
  function buildToc(nav) {
    var headings = Array.prototype.slice.call(document.querySelectorAll("h2[id]"));
    if (headings.length === 0) return;
    var ol = document.createElement("ol");
    headings.forEach(function (h) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent;
      li.appendChild(a);
      ol.appendChild(li);
    });
    nav.appendChild(ol);
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav.toc[data-toc]").forEach(buildToc);
  });
})();
