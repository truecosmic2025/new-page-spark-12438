/**
 * Opens Claudde through its public API. Retries while the deferred widget
 * script is still initializing so a CTA click is not lost on first load.
 */
export function openClauddeWidget(maxAttempts = 20, intervalMs = 250): void {
  let attempts = 0;

  const tryOpen = (): boolean => {
    if (!window.Claudde?.open) return false;

    window.Claudde?.open();
    return true;
  };

  if (tryOpen()) return;

  const timer = window.setInterval(() => {
    attempts += 1;
    if (tryOpen() || attempts >= maxAttempts) {
      window.clearInterval(timer);
    }
  }, intervalMs);
}
