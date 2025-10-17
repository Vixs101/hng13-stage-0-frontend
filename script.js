(function () {
  const timeEl = document.querySelector('[data-testid="test-user-time"]');

  if (!timeEl) return;

  function renderNow() {
    const now = Date.now();
    timeEl.textContent = String(now);
    timeEl.setAttribute("aria-label", `Current time in milliseconds: ${now}`);
  }
  renderNow();

  const intervalId = setInterval(renderNow, 1000);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      clearInterval(intervalId);
    }
  });
})();
