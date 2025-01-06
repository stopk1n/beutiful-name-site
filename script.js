let currentNames = [];

async function animateAndLoadNames(file, buttonId) {
    const button = document.getElementById(buttonId);
    button.classList.add('moved');

    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error('Ошибка загрузки файла');
        const text = await response.text();
        currentNames = text.split('\n').filter(name => name.trim() !== '');
        displayNames(currentNames);
    } catch (error) {
        alert('Ошибка: ' + error.message);
        button.classList.remove('moved');
    }
}

function displayNames(list) {
    const nameListElement = document.getElementById('name-list');
    nameListElement.innerHTML = ''; // Очищаем предыдущие имена
    list.forEach((name, index) => {
        setTimeout(() => {
            const nameElement = document.createElement('div');
            nameElement.className = 'name-item';
            nameElement.textContent = name;
            nameListElement.appendChild(nameElement);
        }, index * 50); // Ускорено появление имен
    });
}
