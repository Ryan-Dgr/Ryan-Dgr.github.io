/*
const setup = () => {
// script: scripts/code.js

    const input = document.querySelector('.search-bar input');
    const goButton = document.querySelector('.search-bar button');
    const historySection = document.querySelector('.history-section');

// Social media config
    const platformMap = {
        g: {
            title: 'Google',
            urlPrefix: 'https://www.google.com/search?q=',
            color: 'bg-primary',
            btnClass: 'btn-light'
        },
        y: {
            title: 'Youtube',
            urlPrefix: 'https://www.youtube.com/results?search_query=',
            color: 'bg-danger',
            btnClass: 'btn-dark'
        },
        x: {
            title: 'Twitter',
            urlPrefix: 'https://x.com/hashtag/',
            color: 'bg-info',
            btnClass: 'btn-dark'
        },
        i: {
            title: 'Instagram',
            urlPrefix: 'https://www.instagram.com/explore/tags/',
            color: 'bg-purple',
            btnClass: 'btn-warning'
        }
    };

// Load existing history
    let historyArray = JSON.parse(localStorage.getItem('history')) || [];
    historyArray.forEach(item => addCard(item));

// Event listener
    goButton.addEventListener('click', function () {
        const command = input.value.trim();

        if (!command.startsWith('/') || command.length < 3) {
            alert('Ongeldig commando. Gebruik /[letter] zoekopdracht');
            return;
        }

        const prefix = command[1].toLowerCase();
        const query = command.slice(3);

        if (!platformMap[prefix]) {
            alert('Onbekende prefix!');
            return;
        }

        const { title, urlPrefix, color, btnClass } = platformMap[prefix];
        const formattedQuery = query.replace(/\s+/g, prefix === 'x' ? '' : '+');
        const fullUrl = urlPrefix + formattedQuery;

        const newEntry = { title, text: query, url: fullUrl, color, btnClass };
        historyArray.push(newEntry);
        localStorage.setItem('history', JSON.stringify(historyArray));
        addCard(newEntry);

        window.open(fullUrl, '_blank');
        input.value = '';
    });

// Create and append card
    function addCard({ title, text, url, color, btnClass }) {
        const col = document.createElement('div');
        col.className = 'col-md-4';

        col.innerHTML = `
    <div class="card ${color} text-white history-card">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${text}</p>
        <a class="btn ${btnClass}" href="${url}" target="_blank">Go!</a>
      </div>
    </div>
  `;
        historySection.appendChild(col);
    }

}
window.addEventListener("load", setup);*/