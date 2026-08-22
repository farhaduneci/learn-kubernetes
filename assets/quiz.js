// Shared retrieval-practice quiz component.
//
// Terse form (preferred — one line per question):
// <div class="quiz" data-questions='[{"q":"Question?","a":"answer"}, ...]'></div>
//
// Hand-written form (for one-off custom layouts):
// <div class="quiz-item" data-answer="etcd">
//   <p class="quiz-q">Question text?</p>
//   <input type="text" class="quiz-input" placeholder="Type your answer" />
//   <div class="quiz-actions">
//     <button class="quiz-check btn" type="button">Check</button>
//     <button class="quiz-reveal btn" type="button">Reveal</button>
//   </div>
//   <p class="quiz-feedback"></p>
// </div>
(function () {
  function normalize(s) {
    return s.trim().toLowerCase().replace(/\s+/g, " ");
  }

  function escapeAttr(s) {
    return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
  }

  function quizItemMarkup(question) {
    return (
      '<div class="quiz-item" data-answer="' + escapeAttr(question.a) + '">' +
      '<p class="quiz-q">' + question.q + "</p>" +
      '<input type="text" class="quiz-input" placeholder="Your answer" />' +
      '<div class="quiz-actions">' +
      '<button class="quiz-check btn" type="button"><i class="icon" data-icon="check" aria-hidden="true"></i>Check</button>' +
      '<button class="quiz-reveal btn" type="button"><i class="icon" data-icon="eye" aria-hidden="true"></i>Reveal</button>' +
      "</div>" +
      '<p class="quiz-feedback"></p>' +
      "</div>"
    );
  }

  function expandDataQuizzes(root) {
    root.querySelectorAll(".quiz[data-questions]").forEach(function (container) {
      var questions;
      try {
        questions = JSON.parse(container.getAttribute("data-questions"));
      } catch (e) {
        console.error("quiz.js: invalid data-questions JSON", e);
        return;
      }
      container.innerHTML = questions.map(quizItemMarkup).join("");
    });
  }

  function initQuiz(root) {
    root.querySelectorAll(".quiz-item").forEach(function (item) {
      const answer = item.getAttribute("data-answer") || "";
      const input = item.querySelector(".quiz-input");
      const checkBtn = item.querySelector(".quiz-check");
      const revealBtn = item.querySelector(".quiz-reveal");
      const feedback = item.querySelector(".quiz-feedback");

      function setFeedback(text, ok) {
        feedback.classList.remove("is-visible");
        feedback.textContent = text;
        feedback.style.color = ok ? "var(--good)" : "var(--bad)";
        // Force reflow so re-adding the class retriggers the transition on repeat answers.
        void feedback.offsetWidth;
        feedback.classList.add("is-visible");
      }

      if (checkBtn) {
        checkBtn.addEventListener("click", function () {
          if (!input.value.trim()) {
            setFeedback("Type an answer first.", false);
            return;
          }
          const correct = normalize(input.value) === normalize(answer);
          setFeedback(
            correct ? "Correct." : "Not quite — try once more, or reveal.",
            correct
          );
        });
        input.addEventListener("keydown", function (e) {
          if (e.key === "Enter") checkBtn.click();
        });
      }

      if (revealBtn) {
        revealBtn.addEventListener("click", function () {
          setFeedback("Answer: " + answer, true);
        });
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    expandDataQuizzes(document);
    initQuiz(document);
    if (window.Icons) window.Icons.hydrate(document);
  });
})();
