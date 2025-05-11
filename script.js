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
                ${actress.video ? '' : ''}  <!-- メディアの部分を削除 -->
            `;
            actressList.appendChild(actressCard);
        });
    }

    function filterActresses() {
        const query = searchInput.value.toLowerCase();
        const filteredActresses = actresses.filter(actress =>
            actress.name.toLowerCase().includes(query) ||
            actress.genre.toLowerCase().includes(query)
        );
        displayActresses(filteredActresses);
    }

    searchInput.addEventListener('input', filterActresses);
    displayActresses(actresses);  // 初期表示
};
