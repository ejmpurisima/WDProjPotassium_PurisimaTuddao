let currentRating = 0;
const stars = document.querySelectorAll('.star');

const seasonData = { 
    "1": 8, 
    "2": 8, 
    "3": 6 
};

function updateStars(rating) {
    stars.forEach(star => {
        star.classList.toggle('selected', star.getAttribute('data-value') <= rating);
    });
}

stars.forEach(star => {
    star.addEventListener('click', () => {
        currentRating = star.getAttribute('data-value');
        updateStars(currentRating);
    });
});

function updateEpisodeDropdown() {
    const seasonSelect = document.getElementById('season');
    const episodeSelect = document.getElementById('episode');
    const selectedSeason = seasonSelect.value;

    episodeSelect.innerHTML = '<option value="" disabled selected>Choose Episode</option>';
    episodeSelect.disabled = false;

    const count = seasonData[selectedSeason];
    for (let i = 1; i <= count; i++) {
        let opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = `Episode ${i}`;
        episodeSelect.appendChild(opt);
    }
}

function logEpisode() {
    const season = document.getElementById('season').value;
    const episode = document.getElementById('episode').value;
    const notes = document.getElementById('notes').value;

    if (!season || !episode || currentRating === 0) {
        alert("A completion is required to extend your visa! Fill in all fields.");
        return;
    }

    const logId = `S${season}E${episode}`;
    const logTitle = `Season ${season}, Episode ${episode}`;

    const entry = {
        id: logId,
        title: logTitle,
        notes: notes,
        rating: Number(currentRating)
    };

    let logs = JSON.parse(localStorage.getItem('borderland_logs')) || [];
    const index = logs.findIndex(l => l.id === logId);

    if (index !== -1) {
        logs[index] = entry;
    } else {
        logs.push(entry);
    }

    localStorage.setItem('borderland_logs', JSON.stringify(logs));
    clearForm();
    displayLogs();
}

function clearForm() {
    document.getElementById('season').value = "";
    document.getElementById('episode').innerHTML = '<option value="" disabled selected>Select Season first</option>';
    document.getElementById('episode').disabled = true;
    document.getElementById('notes').value = '';
    currentRating = 0;
    updateStars(0);
}

function displayLogs() {
    const logs = JSON.parse(localStorage.getItem('borderland_logs')) || [];
    const container = document.getElementById('episodeList');
    container.innerHTML = '';

    logs.forEach((log, index) => {
        const item = document.createElement('div');
        item.className = 'episode-log-item';
        item.innerHTML = `
            <button class="delete-log" onclick="deleteLog(${index})">ERASE</button>
            <h4>${log.title}</h4>
            <div class="log-stars">${'★'.repeat(log.rating)}</div>
            <span class="log-notes">${log.notes ? '"' + log.notes + '"' : 'No notes recorded.'}</span>
        `;
        container.appendChild(item);
    });
}

function deleteLog(index) {
    if (confirm("Delete this survival record permanently?")) {
        let logs = JSON.parse(localStorage.getItem('borderland_logs')) || [];
        logs.splice(index, 1);
        localStorage.setItem('borderland_logs', JSON.stringify(logs));
        displayLogs();
    }
}

displayLogs();