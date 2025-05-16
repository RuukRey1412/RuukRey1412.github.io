window.onload = function() {
    const searchInput = document.getElementById('searchInput');
    const actressList = document.getElementById('actressList');

    function displayActresses(filteredActresses) {
        actressList.innerHTML = "";  // リストをクリア
        filteredActresses.forEach(actress => {
            const actressCard = document.createElement('div');
            actressCard.classList.add('actress-card');
            actressCard.innerHTML = `
                <h3>${actress.name}</h3>
                <a href="${actress.link}" target="_blank">詳細を見る</a>
            `;
            actressList.appendChild(actressCard);
        });
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function filterActresses() {
        const query = searchInput.value.toLowerCase();
        const filteredActresses = actresses.filter(actress =>
            actress.name.toLowerCase().includes(query) ||
            actress.keywords.some(keyword => keyword.toLowerCase().includes(query))
        );
        displayActresses(filteredActresses);
    }

    // ランダムに並べ替え
    shuffleArray(actresses);

    searchInput.addEventListener('input', filterActresses);
    displayActresses(actresses);  // 初期表示
};
