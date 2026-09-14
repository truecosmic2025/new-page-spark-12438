/**
 * Opens the Claudde chat widget by clicking its launcher button inside the
 * widget's shadow DOM. Retries for a few seconds if the widget hasn't
 * mounted yet (the script loads with `defer`).
 */
export function openClauddeWidget(maxAttempts = 20, intervalMs = 250): void {
  let attempts = 0;

  const tryOpen = (): boolean => {
    const hosts = Array.from(document.querySelectorAll("*")).filter(
      (el) => el.shadowRoot
    );

    for (const host of hosts) {
      const launcher = host.shadowRoot!.querySelector<HTMLElement>(
        "button, [role='button'], .claudde-launcher, .launcher"
      );
      if (launcher) {
        launcher.click();
        return true;
      }
    }
    return false;
  };

  if (tryOpen()) return;

  const timer = window.setInterval(() => {
    attempts += 1;
    if (tryOpen() || attempts >= maxAttempts) {
      window.clearInterval(timer);
    }
  }, intervalMs);
}
