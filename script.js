function calculatePercentages() {
    const authorsViews = {};

    for (let i = 1; i <= 5; i++) {
        const author = document.getElementById(`author${i}`).value.trim();
        const views = parseInt(document.getElementById(`views${i}`).value.trim());

        if (author && !isNaN(views)) {
            if (authorsViews[author]) {
                authorsViews[author] += views;
            } else {
                authorsViews[author] = views;
            }
        }
    }

    const totalViews = Object.values(authorsViews).reduce((acc, curr) => acc + curr, 0);
    const authorsPercentage = {};
    for (const author in authorsViews) {
        authorsPercentage[author] = ((authorsViews[author] / totalViews) * 100).toFixed(2);
    }

    displayPercentages(authorsPercentage, totalViews);
}

function displayPercentages(authorsPercentage, totalViews) {
    const output = document.getElementById('output');
    output.innerHTML = `<h2>Total Views: ${totalViews}</h2>`;
    output.innerHTML += '<h2>Percentages:</h2>';
    for (const author in authorsPercentage) {
        const div = document.createElement('div');
        div.textContent = `${author}: ${authorsPercentage[author]}%`;
        output.appendChild(div);
    }
}
