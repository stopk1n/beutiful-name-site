// Импортирование всех файлов с именами
import { russianMaleNames, russianFemaleNames } from './names/russian-names';
import { arabicMaleNames, arabicFemaleNames } from './names/arabic-names';
import { latinMaleNames, latinFemaleNames } from './names/latin-names';
import { englishMaleNames, englishFemaleNames } from './names/english-names';
import { japaneseMaleNames, japaneseFemaleNames } from './names/japanese-names';

// Функция для загрузки имен по фильтрам
function loadNames() {
  const culture = document.getElementById('culture').value;
  const gender = document.getElementById('gender').value;
  let names = [];

  // Выбор имен по культуре и полу
  if (culture === 'russian') {
    names = gender === 'male' ? russianMaleNames : russianFemaleNames;
  } else if (culture === 'arabic') {
    names = gender === 'male' ? arabicMaleNames : arabicFemaleNames;
  } else if (culture === 'latin') {
    names = gender === 'male' ? latinMaleNames : latinFemaleNames;
  } else if (culture === 'english') {
    names = gender === 'male' ? englishMaleNames : englishFemaleNames;
  } else if (culture === 'japanese') {
    names = gender === 'male' ? japaneseMaleNames : japaneseFemaleNames;
  }

  // Выводим имена в список
  displayNames(names);
}

// Функция для отображения имен
function displayNames(names) {
  const namesList = document.getElementById('names-list');
  namesList.innerHTML = '';  // Очищаем список перед новым отображением

  names.forEach(name => {
    const listItem = document.createElement('div');
    listItem.classList.add('name-item');
    listItem.textContent = name;
    namesList.appendChild(listItem);
  });
}

// Обработчик кнопки для загрузки имен
document.getElementById('loadNamesBtn').addEventListener('click', loadNames);
