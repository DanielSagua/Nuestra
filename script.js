// Corazones flotando (suave). Se desactiva con prefers-reduced-motion (CSS).
(() => {
  const hearts = ["❤️","💘","💝","💞","💓"];
  const spawnEveryMs = 250;

  function spawnHeart() {
    const el = document.createElement("div");
    el.className = "heart";
    el.textContent = hearts[Math.floor(Math.random() * hearts.length)];

    const left = Math.random() * 100; // vw
    const size = 14 + Math.random() * 18; // px
    const duration = 6 + Math.random() * 5; // s
    const drift = (Math.random() * 120 - 60).toFixed(0) + "px";

    el.style.left = left + "vw";
    el.style.fontSize = size + "px";
    el.style.animationDuration = duration + "s";
    el.style.setProperty("--drift", drift);

    document.body.appendChild(el);

    // limpiar
    setTimeout(() => el.remove(), (duration + 0.5) * 1000);
  }

  setInterval(spawnHeart, spawnEveryMs);
})();
