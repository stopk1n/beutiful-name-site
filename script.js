const names = [
  { name: 'Алексей', gender: 'male', culture: 'russian' },
  { name: 'Мария', gender: 'female', culture: 'russian' },
  { name: 'Омар', gender: 'male', culture: 'arabic' },
  { name: 'Лейла', gender: 'female', culture: 'arabic' },
  { name: 'Марк', gender: 'male', culture: 'latin' },
  { name: 'София', gender: 'female', culture: 'latin' },
  // Добавь больше имен по мере необходимости
];

function filterNames() {
  const gender = document.getElementById('gender').value;
  const culture = document.getElementById('culture').value;
  const firstLetter = document.getElementById('first-letter').value.toLowerCase();

  const filteredNames = names.filter(name => {
    return (
      (gender === 'all' || name.gender === gender) &&
      (culture === 'all' || name.culture === culture) &&
      (firstLetter === '' || name.name.toLowerCase().startsWith(firstLetter))
    );
  });

  displayNames(filteredNames);
}

function displayNames(filteredNames) {
  const nameList = document.getElementById('name-list');
  nameList.innerHTML = '';

  filteredNames.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name.name;
    nameList.appendChild(li);
  });
}

document.getElementById('gender').addEventListener('change', filterNames);
document.getElementById('culture').addEventListener('change', filterNames);
document.getElementById('first-letter').addEventListener('input', filterNames);

document.getElementById('random-name-btn').addEventListener('click', function() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  document.getElementById('random-name-result').textContent = randomName.name;
});

// Инициализация
filterNames();
