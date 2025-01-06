let currentNames = [];

async function loadNames(file) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error('Файл не найден');
        const text = await response.text();
        currentNames = text.split('\n').filter(name => name.trim() !== '');
        displayNames(currentNames);
    } catch (error) {
        alert('Ошибка: ' + error.message);
    }
}

function displayNames(list) {
    const nameListElement = document.getElementById('name-list');
    nameListElement.innerHTML = list.map(name => 
        `<div class="name-item">${name}</div>`
    ).join('');
}
