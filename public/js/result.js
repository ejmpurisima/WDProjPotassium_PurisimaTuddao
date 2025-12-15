const screenContent = document.getElementById('screenContent');

document.querySelectorAll('.participant-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const key = icon.alt;
    const info = participants[key];

    screenContent.style.opacity = 0;

    setTimeout(() => {
      screenContent.innerHTML = `
        <div class="info-left">
          <div class="character-name">${info.name}</div>
          <div class="status ${info.status.toLowerCase()}">
            STATUS: ${info.status}
          </div>
          <div class="info-text">${info.text}</div>
        </div>

        <div class="info-right">
          <img src="${info.img}" alt="${info.name}" class="character-image">
        </div>
      `;

      screenContent.style.opacity = 1;
    }, 200);
  });
});