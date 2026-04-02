// Функция для обновления времени
function updateTime() {
    const now = new Date();
    
    // Время в формате HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Дата
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const dateString = now.toLocaleDateString('ru-RU', options);
    
    // Обновляем отображение
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
    
    // Позиции стрелок часов
    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourDegrees = ((hours % 12 / 12) * 360) + ((minutes / 60) * 30) + 90;
    
    document.getElementById('second').style.transform = `rotate(${secondDegrees}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDegrees}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hourDegrees}deg)`;
    
    // Определяем время суток для смены темы
    updateTheme(now.getHours());
    updateGreeting(now.getHours());
}

// Функция смены темы в зависимости от времени суток
function updateTheme(hours) {
    const body = document.body;
    body.className = ''; // Убираем старые классы
    
    if (hours >= 5 && hours < 12) {
        body.classList.add('morning');
    } else if (hours >= 12 && hours < 17) {
        body.classList.add('day');
    } else if (hours >= 17 && hours < 22) {
        body.classList.add('evening');
    } else {
        body.classList.add('night');
    }
}

// Функция приветствия
function updateGreeting(hours) {
    const greeting = document.getElementById('greeting');
    
    if (hours >= 5 && hours < 12) {
        greeting.textContent = 'Good mourning!';
    } else if (hours >= 12 && hours < 17) {
        greeting.textContent = 'Good die!';
    } else if (hours >= 17 && hours < 22) {
        greeting.textContent = 'Good eviling!';
    } else {
        greeting.textContent = 'Good knight!';
